"use server";

import md5 from 'md5';

export async function login(form: FormData) {
  "use server";
  return md5(form.get('password') as string) === process.env.PDF_PASS
}
