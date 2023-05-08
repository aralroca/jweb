const style: React.CSSProperties = { lineHeight: '24px', display: 'flex', gap: 20, flexDirection: 'column' }

export default function Visits() {
  return (
    <div className="content" style={style}>
      <h2>Visites</h2>
      <table style={{ borderCollapse: 'collapse', maxWidth: 320 }}>
        <tr>
          <td>PORTADA:</td>
          <td><b>19970</b> visites</td>
        </tr>
        <tr>
          <td>PRESENTACIO_CAT:</td>
          <td><b>2104</b> visites</td>
        </tr>
        <tr>
          <td>PRESENTACIO_CAST:</td>
          <td><b>808</b> visites</td>
        </tr>
        <tr>
          <td>PRESENTACIO_ENG:</td>
          <td><b>886</b> visites</td>
        </tr>
        <tr>
          <td>PRESENTACIO_FRAN:</td>
          <td><b>866</b> visites</td>
        </tr>
        <tr>
          <td>CURRICULUM:</td>
          <td><b>2116</b> visites</td>
        </tr>
        <tr>
          <td>CONCURSOS:</td>
          <td><b>2101</b> visites</td>
        </tr>
        <tr>
          <td>PROJECTESIOBRES:</td>
          <td><b>2787</b> visites</td>
        </tr>
        <tr>
          <td>CONTACTE:</td>
          <td><b>2137</b> visites</td>
        </tr>
      </table>
    </div>
  )
}
