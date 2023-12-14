export const getSpeaker = person => {
  if (!person) {
    return {};
  }
  const { firstName, lastName, role, headshot, company } = person.fields;
  const fullName = `${firstName} ${lastName}`;

  return {
    fullName,
    role,
    company: company || 'Curative',
    headshot,
    id: person.sys.id,
  };
};

export const selectCard = (selected, idx, setSelected) => {
  setSelected(selected !== idx ? idx : null);
};
