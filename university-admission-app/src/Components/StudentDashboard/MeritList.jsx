

const MeritList = () => {
    return (
      <div className="grid min-h-[75vh] place-items-center px-3">
       <table className="shadow-xl bg-white lg:w-[800px] w-full">
        <caption className="mb-2 lg:w-[800px] w-full text-center text-xl font-semibold text-[#1B4E69] ">Selection List</caption>
    <thead>
      <tr className="bg-[#1B4E69] text-white">
        <th className="py-3">S.no</th>
        <th>Name</th>
        <th>F/Name</th>
        <th>Deptt</th>
        <th>Aggregate</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
     <tr className="text-center font-semibold">
      <td className="py-3">1</td>
      <td>Hakim Ullah</td>
      <td>Abdul Shakoor</td>
      <td>CS</td>
      <td>67.09</td>
      <td>Selected</td>
     </tr>
     
     <tr className="text-center font-semibold">
      <td className="py-3">2</td>
      <td>Hakim Ullah</td>
      <td>Abdul Shakoor</td>
      <td>Phy</td>
      <td>67.09</td>
      <td>Waiting</td>
     </tr>
     
     <tr className="text-center font-semibold">
      <td className="py-3">3</td>
      <td>Hakim Ullah</td>
      <td>Abdul Shakoor</td>
      <td>Maths</td>
      <td>67.09</td>
      <td>Rejected</td>
     </tr>
     
    
     
     
    </tbody>
  </table>
      </div>
    )
  }
  
  export default MeritList