import DisplayPDF from "@src/app/components/DisplayPDF";

export default function Presentation({ params: { lang } }: { params: { lang: string } }) {
  return (
    <div className="content flat">
      <DisplayPDF name={`presentacio_${lang}.pdf`} pdfLink={`/pdfs/presentacio/${lang}.pdf`} />
    </div>
  )
}
