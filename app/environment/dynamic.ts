if(process.env.NEXT_PUBLIC_DYNAMIC_ENV === undefined) throw Error('DYNAMIC_ENV is undefined');

export const dynamic_env = process.env.NEXT_PUBLIC_DYNAMIC_ENV;