import QR from '../assets/images/image-qr-code.png';

function App() {
  return (
    <div className="h-screen flex justify-center items-center bg-lightGray">
      <div className="max-w-[550px] mx-9 flex flex-col p-7 bg-white rounded-3xl gap-10">
        <img className="rounded-xl" src={QR} alt="qr code" />
        <div className="flex flex-col px-5 text-center font-outfit gap-6">
          <h2 className='text-3xl font-bold text-darkBlue'>Improve your front-end skills by building projects</h2>
          <p className='text-2xl text-grayishBlue mb-7'>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
