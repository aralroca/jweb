import DisplayPDF from "../components/DisplayPDF";

export default function Curriculum() {
  return (
    <div className="content flat">
      <DisplayPDF pdfLink={`/pdfs/curriculum/CURRICULUM.PDF`} section={250} />
    </div>
  )
}
