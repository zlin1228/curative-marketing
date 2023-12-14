export const getTimeRemaining = (time: string) => {
  const currentTimeCST = new Date(new Date().toLocaleString('en-US', { timeZone: 'CST' }));
  const differ = parseInt(((new Date(time).getTime() - currentTimeCST.getTime()) / 1000).toFixed());

  return differ >= 0 ? differ : 0;
};

export const getCountDownNumbers = (countdown: number) => [
  parseInt((countdown / 3600 / 10).toString()),
  parseInt(((countdown / 3600) % 10).toString()),
  ':',
  parseInt((((countdown / 60) % 60) / 10).toString()),
  parseInt((((countdown / 60) % 60) % 10).toString()),
  ':',
  parseInt((((countdown % 3600) % 60) / 10).toString()),
  parseInt((((countdown % 3600) % 60) % 10).toString()),
];
