"use client";

import { login } from "../actions/login";

export default function Download({ searchParams: { pdf, name } }: { searchParams: { pdf: string, name: string } }) {
  async function action(form: FormData) {
    const logged = await login(form)
    if (!logged) return alert("Contrasenya incorrecta")
    const href = window.location.origin + pdf
    const link = document.createElement('a')
    link.href = href
    link.download = name ?? pdf
    link.click()
    link.remove()
  }

  return (
    <div className="content">
      <h2 style={{ fontSize: 14 }}>Contrasenya de descàrrega:</h2>
      <form action={action}>
        <input style={{ padding: 5, width: 200, border: '1px solid grey' }} type="password" name="password" placeholder="Posa la contrasenya aquí" />
        <input style={{ margin: 5, padding: 5 }} type="submit" value="Descarregar" />
      </form>
      <a style={{ fontSize: 12 }} href="javascript:history.back()">Tornar endarrera</a>
    </div>
  )
}
