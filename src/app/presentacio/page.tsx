import DisplayPDF from "../components/DisplayPDF";

export default function Presentation() {
  return (
    <div className="content">
      <DisplayPDF pdfLink="/pdfs/presentacio/CAT.PDF" />
    </div>
  )
}
