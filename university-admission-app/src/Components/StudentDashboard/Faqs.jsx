import Faq from 'react-faq-component';
const Faqs = () => {
  const data = {
    rows: [
      {
        title: "How do I access the online admission application system?",
        content: "Lorem ipsum dolor sit amet, consectetur "
      },
      {
        title: "What documents do I need to submit through the online system?",
        content: "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam."
      },
      {
        title: "How do I pay the application fee online?",
        content: "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc"
      },
      {
        title: "How can I check the status of my application after submission?",
        content: "v1.0.5"
      }]
  }
  return (
    <>
    <section className='min-h-[75vh] grid place-items-center p-2' >
    <div className="max-w-[768px] w-full  overflow-hidden bg-white shadow-md rounded-md">
    <div className="h-[2.8rem] border bg-[#1B4E69] grid place-items-center">
               <h4 className="text-white font-semibold text-xl">FaQs & Help</h4>
             </div>
<div className='px-3'>
        <Faq data={data}/>
      </div>
    </div>
    </section>
      
    </>
  )
}

export default Faqs