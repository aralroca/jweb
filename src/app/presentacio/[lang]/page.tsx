import DisplayPDF from "@src/app/components/DisplayPDF";

export default function Presentation({ params: { lang } }: { params: { lang: string } }) {
  return (
    <div className="content flat">
      <DisplayPDF pdfLink={`/pdfs/presentacio/${lang}.PDF`} />
    </div>
  )
}
