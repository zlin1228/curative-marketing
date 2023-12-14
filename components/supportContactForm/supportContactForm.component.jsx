import { Formik } from 'formik';
import * as Yup from 'yup';

import { Wrapper } from 'components/supportContactForm/supportContactForm.styles';

const FormSubmissionStatus = {
  Unsubmitted: 0,
  SubmittedSuccessfully: 1,
  SubmissionFailed: 2,
};

const HelpType = {
  TEST_RESULTS: 'TEST_RESULTS',
  BOOKING_APPOINTMENT: 'BOOKING_APPOINTMENT',
  UPDATING_APPOINTMENT: 'UPDATING_APPOINTMENT',
  RESCHEDULING_CANCELLING_APPOINTMENT: 'RESCHEDULING_CANCELLING_APPOINTMENT',
  VACCINATION_RECORDS: 'VACCINATION_RECORDS',
  GENERAL_INQUIRY: 'GENERAL_INQUIRY',
};

const TestType = {
  LAB_PCR: 'LAB_PCR',
  RAPID_PCR: 'RAPID_PCR',
  ABBOTT_ID_NOW: 'ABBOTT_ID_NOW',
  ABBOTT_RAPID_ANTIGEN: 'ABBOTT_RAPID_ANTIGEN',
  UNINSURED_SELF_PAY: 'UNINSURED_SELF_PAY',
};

const helpTypesRequiringDOB = [
  HelpType.TEST_RESULTS,
  HelpType.UPDATING_APPOINTMENT,
  HelpType.RESCHEDULING_CANCELLING_APPOINTMENT,
  HelpType.VACCINATION_RECORDS,
];

const helpTypesRequiringAuthorization = [HelpType.TEST_RESULTS, HelpType.VACCINATION_RECORDS];

const helpTypesRequiringTestType = [HelpType.BOOKING_APPOINTMENT];

const SupportContactForm = () => {
  const submitForm = async formData =>
    (
      await fetch('https://labtools.curativeinc.com/api/support/form', {
        method: 'POST',
        body: formData,
        headers: {}, // strip our existing content headers
      })
    ).data;
  const helpTypeOptions = [
    {
      key: HelpType.TEST_RESULTS,
      label: 'Looking for COVID-19 test results',
    },
    {
      key: HelpType.BOOKING_APPOINTMENT,
      label: 'Booking an appointment',
    },
    {
      key: HelpType.UPDATING_APPOINTMENT,
      label: 'Updating appointment information',
    },
    {
      key: HelpType.RESCHEDULING_CANCELLING_APPOINTMENT,
      label: 'Rescheduling/cancelling an appointment',
    },
    {
      key: HelpType.VACCINATION_RECORDS,
      label: 'Need previous vaccination records',
    },
    {
      key: HelpType.GENERAL_INQUIRY,
      label: 'General Inquiry',
    },
  ];

  const testTypeOptions = [
    {
      key: TestType.LAB_PCR,
      label: 'Laboratory PCR',
    },
    {
      key: TestType.RAPID_PCR,
      label: 'Rapid PCR',
    },

    {
      key: TestType.ABBOTT_ID_NOW,
      label: 'Abbott ID Now Naat',
    },

    {
      key: TestType.ABBOTT_RAPID_ANTIGEN,
      label: 'Abbott Rapid Antigen Test',
    },

    {
      key: TestType.UNINSURED_SELF_PAY,
      label: 'Uninsured Self Pay',
    },
  ];

  const requiredText = 'Required';
  const ContactSchema = Yup.object().shape({
    firstName: Yup.string().min(2, 'Too short!').max(50, 'Too long!').required(requiredText).nullable(),

    lastName: Yup.string().min(2, 'Too short!').max(50, 'Too long!').required(requiredText).nullable(),

    email: Yup.string().email('Invalid email').required(requiredText).nullable(),

    appointmentNumber: Yup.string().nullable(),

    phoneNumber: Yup.string().nullable(),

    message: Yup.string().required(requiredText),

    helpType: Yup.string().required(requiredText),

    dob: Yup.date()
      .nullable()
      .when('helpType', {
        is: helpType => helpTypesRequiringDOB.includes(helpType),
        then: Yup.date().nullable().required(requiredText),
      }),

    hasProvidedAuthorization: Yup.bool().when('helpType', {
      is: helpType => helpTypesRequiringAuthorization.includes(helpType),
      then: Yup.bool().oneOf([true], requiredText),
    }),

    testType: Yup.string()
      .nullable()
      .when('helpType', {
        is: helpType => helpTypesRequiringTestType.includes(helpType),
        then: Yup.string().required(requiredText).nullable(),
      }),
  });

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    appointmentNumber: '',
    message: '',
    helpType: '',
    dob: undefined,
    testType: '',
    hasProvidedAuthorization: false,
  };

  return (
    <Wrapper>
      <Formik
        initialStatus={FormSubmissionStatus.Unsubmitted}
        validationSchema={ContactSchema}
        initialValues={initialValues}
        onSubmit={async (values, { setSubmitting, setStatus, resetForm }) => {
          if (!values.helpType) {
            return;
          }

          if (!helpTypesRequiringAuthorization.includes(values.helpType)) {
            values.hasProvidedAuthorization = false;
          }

          if (!helpTypesRequiringDOB.includes(values.helpType)) {
            values.dob = null;
          }

          if (!helpTypesRequiringTestType.includes(values.helpType)) {
            values.testType = null;
          }

          setSubmitting(true);

          const formData = new FormData();

          formData.append('first_name', values.firstName);
          formData.append('last_name', values.lastName);

          formData.append('email', values.email);
          formData.append('phone_number', values.phoneNumber);
          formData.append('appt_number', values.appointmentNumber);

          formData.append('help_type', values.helpType);
          formData.append('message', values.message);

          formData.append('has_provided_authorization', values.hasProvidedAuthorization ? 'True' : 'False');

          formData.append('test_type', values.testType ? values.testType : '');
          formData.append('dob', values.dob || '');

          try {
            await submitForm(formData);
            resetForm();
            setStatus(FormSubmissionStatus.SubmittedSuccessfully);
          } catch (err) {
            console.error(err);
            setStatus(FormSubmissionStatus.SubmissionFailed);
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({
          isValid,
          isSubmitting,
          isValidating,
          handleChange,
          handleBlur,
          values,
          status,
          submitForm,
          touched,
          errors,
        }) => (
          <div className="contact-form" role="form">
            {/* avoiding form here to avoid Hubspot tracking code from detecting it */}
            {status !== FormSubmissionStatus.Unsubmitted && (
              <>
                <h2>{FormSubmissionStatus.SubmittedSuccessfully ? 'We got your message!' : 'Something went wrong.'}</h2>
                <p>
                  {FormSubmissionStatus.SubmittedSuccessfully
                    ? 'Our customer care team will reach out to you soon'
                    : 'Can you try to submit the form again?'}
                </p>
              </>
            )}
            {status !== FormSubmissionStatus.SubmittedSuccessfully && (
              <>
                <fieldset className="form-columns-2">
                  <div className="form-field">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      name="firstName"
                      placeholder="First Name"
                      value={values.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    ></input>
                    {errors.firstName && touched.firstName && errors.firstName}
                  </div>
                  <div className="form-field">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      name="lastName"
                      placeholder="Last Name"
                      value={values.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    ></input>
                    {errors.lastName && touched.lastName && errors.lastName}
                  </div>
                </fieldset>
                <fieldset className="form-columns-2">
                  <div className="form-field">
                    <label htmlFor="email">Email</label>
                    <input
                      name="email"
                      placeholder="example@example.com"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    ></input>
                    {errors.email && touched.email && errors.email}
                  </div>
                  <div className="form-field">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input
                      name="phoneNumber"
                      placeholder="Phone Number"
                      value={values.phoneNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    ></input>
                    {errors.phoneNumber && touched.phoneNumber && errors.phoneNumber}
                  </div>
                </fieldset>
                <fieldset className="form-columns-1">
                  <div className="form-field">
                    <label htmlFor="appointmentNumber">Appointment number (if applicable)</label>
                    <input
                      name="appointmentNumber"
                      placeholder="CUR0000000000"
                      value={values.appointmentNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    ></input>
                    {errors.appointmentNumber && touched.appointmentNumber && errors.appointmentNumber}
                  </div>
                </fieldset>
                <fieldset className="form-columns-1">
                  <div className="form-field">
                    <label htmlFor="helpType">What can we help you with?</label>
                    <select name="helpType" value={values.helpType} onChange={handleChange} onBlur={handleBlur}>
                      <option key="default" value="" disabled>
                        Select an option
                      </option>
                      {helpTypeOptions.map(({ key, label }) => (
                        <option key={key} value={key}>
                          {label}
                        </option>
                      ))}
                    </select>
                    {errors.helpType && touched.helpType && errors.helpType}
                  </div>
                </fieldset>
                {values.helpType && helpTypesRequiringTestType.includes(values.helpType) && (
                  <fieldset className="form-columns-1">
                    <div className="form-field">
                      <select name="testType" value={values.testType} onChange={handleChange} onBlur={handleBlur}>
                        <option key="default" value="" disabled>
                          Please select test type
                        </option>
                        {testTypeOptions.map(({ key, label }) => (
                          <option key={key} value={key}>
                            {label}
                          </option>
                        ))}
                      </select>
                      {errors.testType && touched.testType && errors.testType}
                    </div>
                  </fieldset>
                )}

                {values.helpType && helpTypesRequiringDOB.includes(values.helpType) && (
                  <fieldset className="form-columns-1">
                    <div className="form-field">
                      <label htmlFor="dob">For HIPAA verification purposes please submit your Date of Birth</label>
                      <input
                        type="date"
                        name="dob"
                        value={values.dob}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      ></input>
                      {errors.dob && touched.dob && errors.dob}
                    </div>
                  </fieldset>
                )}
                {values.helpType && helpTypesRequiringAuthorization.includes(values.helpType) && (
                  <fieldset className="form-columns-1">
                    <div className="form-field">
                      <input
                        id="hasProvidedAuthorization"
                        type="checkbox"
                        name="hasProvidedAuthorization"
                        value={values.hasProvidedAuthorization}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      ></input>
                      <label htmlFor="hasProvidedAuthorization">
                        I authorize Curative to email my results to me via unsecure email
                      </label>
                    </div>
                    {errors.hasProvidedAuthorization &&
                      touched.hasProvidedAuthorization &&
                      errors.hasProvidedAuthorization}
                  </fieldset>
                )}
                <fieldset className="form-columns-1">
                  <div className="form-field">
                    <label htmlFor="message">Message</label>
                    <textarea
                      name="message"
                      placeholder="Leave your message here"
                      value={values.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    ></textarea>
                    {errors.message && touched.message && errors.message}
                  </div>
                </fieldset>
                <div className="submit">
                  <input
                    className={
                      !isValid || isSubmitting || isValidating ? 'cursor-not-allowed bg-grey-400 opacity-75' : ''
                    }
                    onClick={submitForm}
                    disabled={!isValid || isSubmitting || isValidating}
                    type="submit"
                    value="Submit"
                  />
                </div>
              </>
            )}
          </div>
        )}
      </Formik>
    </Wrapper>
  );
};

export default SupportContactForm;
