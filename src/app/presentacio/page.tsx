import DisplayPDF from "../components/DisplayPDF";

export default function Presentation() {
  return (
    <div className="content flat">
      <DisplayPDF name="presentacio_cat.pdf" pdfLink="/pdfs/presentacio/CAT.PDF" />
    </div>
  )
}
