/* eslint-disable no-console */
import Router from 'next/router';
import { useEffect, useState } from 'react';

import { addPatternToInput, getUniqueInstanceId, scriptId } from 'components/form/form.utils';
import FormThankYou from 'components/form/formThankYou/formThankYou.component';
import { FormWrapper } from 'components/form/hubspotForm/hubSpotForm.styles';

const WsHubSpotForm = ({
  formId,
  redirected,
  variation = '',
  thankYouKicker = '',
  thankYouHeading = '',
  thankYouSubheading = '',
  thankYouLinks = '',
  isPopupForm = false,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const instanceId = getUniqueInstanceId();
  const isContainedForm = variation === 'box';
  formId = formId?.trim() || '';
  const portalId = '8404669';
  const formDivId = `hubspotForm-${formId}${isPopupForm ? '-popup' : ''}`;

  useEffect(() => {
    const renderForm = () => {
      console.log('Rendering form');
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId,
          formId,
          formInstanceId: instanceId,
          target: `#${formDivId}`,
          onFormReady: () => {
            const formDiv = document.getElementById(formDivId);
            const submitButton = formDiv.querySelector("[type='submit']");
            addPatternToInput(formDiv, 'firstname');
            addPatternToInput(formDiv, 'lastname');

            const validateForm = event => {
              if (formDiv.querySelector(':invalid')) {
                event.preventDefault();
              }
            };

            submitButton.addEventListener('click', validateForm);
          },
          onFormSubmitted: () => {
            setSubmitted(true);
            if (redirected) {
              Router.push('/thank-you');
            }
          },
        });
      }
    };

    const existingScript = document.getElementById(scriptId);

    const createNewScript = () => {
      const newScript = document.createElement('script');
      newScript.id = scriptId;
      newScript.src = 'https://js.hsforms.net/forms/v2.js';
      document.body.appendChild(newScript);
    };

    if (existingScript && window.hbspt) {
      console.log('Script already exists');
      renderForm();
    } else {
      console.log('Creating new script');
      createNewScript();
      document.getElementById(scriptId).addEventListener('load', () => {
        renderForm();
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <FormWrapper isContainedForm={isContainedForm}>
      {!submitted ? (
        <div id={formDivId} className="hubspotForm"></div>
      ) : (
        <FormThankYou
          kicker={thankYouKicker}
          heading={thankYouHeading}
          subheading={thankYouSubheading}
          thankYouLinks={thankYouLinks}
        />
      )}
    </FormWrapper>
  );
};

export default WsHubSpotForm;
