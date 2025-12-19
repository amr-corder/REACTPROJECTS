export default function Contact() {
  return (
    <section className="py-5">
      <div className="container text-center">

        <h2 className="fw-bold mb-3">CONTACT SECTION</h2>

        
        <form className="w-50 mx-auto">
          <div className="mb-4">
            <input
              type="text"
              className="form-control border-0 border-bottom rounded-0"
              placeholder="userName"
            />
          </div>

          <div className="mb-4">
            <input
              type="number"
              className="form-control border-0 border-bottom rounded-0"
              placeholder="userAge"
            />
          </div>

          <div className="mb-4">
            <input
              type="email"
              className="form-control border-0 border-bottom rounded-0"
              placeholder="userEmail"
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              className="form-control border-0 border-bottom rounded-0"
              placeholder="userPassword"
            />
          </div>

          <button className="btn btn-info text-white px-4">
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
}