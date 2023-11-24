import React from 'react';

function Category() {
  return (
    <div className="mt-16 flex justify-center space-x-16 ">
      <div className="w-40 h-40 relative">
        <a href="#">
          <img
            src="https://cdn.salla.sa/form-builder/2WlrkG2EnsGFeGAFtrCcbdIp20KauN5r8oKlL15G.png"
            alt="Image 1"
            className="w-full h-full rounded-full object-cover"
          />
          <h2 className="text-center text-xl font-semibold mt-2 text-emerald-500">Sale</h2>
        </a>
      </div>
      <div className="w-40 h-40 relative">
        <a href="#">
          <img
            src="https://cdn.salla.sa/form-builder/GMYLTyssiC1bn4NWnvdaY3METmZyrmudm0H0ELOG.png"
            alt="Image 2"
            className="w-full h-full rounded-full object-cover"
          />
          <h2 className="text-center text-xl font-semibold mt-2 text-emerald-500">Sports supplies</h2>
        </a>
      </div>
      <div className="w-40 h-40 relative">
        <a href="#">
          <img
            src="https://cdn.salla.sa/form-builder/ChwRBYVfd4LbMmr9KWPDHNK0RCspPqCTnufAAmJX.png"
            alt="Image 3"
            className="w-full h-full rounded-full object-cover"
          />
          <h2 className="text-center text-xl font-semibold mt-2 text-emerald-500">Football shoes</h2>
        </a>
      </div>
      <div className="w-40 h-40 relative">
        <a href="#">
          <img
            src="https://cdn.salla.sa/form-builder/EQqVgTq7x5EE4ZQfXw4q8w5EVg7sgA3zrxH2ce1V.png"
            alt="Image 4"
            className="w-full h-full rounded-full object-cover"
          />
          <h2 className="text-center text-xxl font-semibold mt-2 text-emerald-500">Printing on T-shirts</h2>
        </a>
      </div>
      <div className="w-40 h-40 relative">
        <a href="#">
          <img
            src="https://cdn.salla.sa/form-builder/HOiCFroVP1ICK6zbw38HvTLUWT8DW25v6xlycqN5.png"
            alt="Image 4"
            className="w-full h-full rounded-full object-cover"
          />
          <h2 className="text-center text-xxl font-semibold mt-2 text-emerald-500">Player category</h2>
        </a>
      </div>
      <div className="w-40 h-40 relative">
        <a href="#">
          <img
            src="https://cdn.salla.sa/form-builder/cpjNNr6g821p82hdKqQl566I9xjX8iomQjbRI3yh.png"
            alt="Image 4"
            className="w-full h-full rounded-full object-cover"
          />
          <h2 className="text-center text-xxl font-semibold mt-2 text-emerald-500">Sportswear</h2>
        </a>
      </div>
    </div>
  );
}

export default Category;
