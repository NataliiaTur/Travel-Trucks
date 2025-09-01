import Features from "../../components/Features/Features.jsx";

function CamperDetailsPage() {
  // Тестові дані з вашого прикладу
  const testCamper = {
    id: "1",
    name: "Road Bear C 23-25",
    form: "alcove",
    length: "7.3m",
    width: "2.65m",
    height: "3.65m",
    tank: "208l",
    consumption: "30l/100km",
    transmission: "automatic",
    engine: "diesel",
    AC: true,
    bathroom: true,
    kitchen: false,
    TV: true,
    radio: true,
    refrigerator: false,
    microwave: true,
    gas: false,
    water: true,
  };

  const handleBookingSubmit = (formData) => {
    console.log("Booking data:", formData);
  };
  return (
    <div>
      <div className="container">
        <h1>Camper Details Page</h1>
        <p>Це сторінка деталей окремого кемпера</p>
        <Features camper={testCamper} onBookingSubmit={handleBookingSubmit} />
      </div>
    </div>
  );
}

export default CamperDetailsPage;
