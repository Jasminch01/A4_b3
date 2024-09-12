import Container from "../Components/Container";

const About = () => {
  return (
    <div className="bg-white text-gray-800 py-10 px-4">
      <Container>
        <div>
          {/* Company Information */}
          <section className="mb-10">
            <h1 className="text-3xl font-bold text-center mb-6">About Us</h1>
            <p className="text-lg text-center max-w-3xl mx-auto">
              Welcome to Fitzone! We are your trusted partner for high-quality
              sports gear and equipment. From footwear to apparel, we ensure you
              have everything you need for top performance in your favorite
              sports.
            </p>
          </section>

          {/* Mission and Vision Statements */}
          <section className="my-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p>
                  Our mission is to provide sports enthusiasts with the best
                  selection of sports gear, apparel, and equipment to help them
                  excel in their activities. We aim to inspire and support a
                  healthy and active lifestyle.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                <p>
                  We envision a world where everyone has access to quality
                  sports gear that encourages physical activity, improves
                  performance, and helps people lead healthier lives.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="my-10">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="mb-2">
              <strong>Phone:</strong> +1 555 123 4567
            </p>
            <p className="mb-2">
              <strong>Email:</strong> support@sportstore.com
            </p>
            <p className="mb-2">
              <strong>Business Hours:</strong> Mon-Fri, 9:00 AM - 6:00 PM
            </p>
          </section>

          {/* Our Team Section */}
          <section className="my-10">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="text-center">
                <img
                  src="https://img.freepik.com/free-photo/portrait-optimistic-businessman-formalwear_1262-3600.jpg?t=st=1726115936~exp=1726119536~hmac=3cac6086f09f40d17b8dcc4e89fc00e460345be347d32d3be037178889e0f9b3&w=1380"
                  alt="John Doe"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold">John Doe</h3>
                <p className="text-gray-500">CEO & Founder</p>
              </div>
              <div className="text-center">
                <img
                  src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Jane Smith"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold">Jane Smith</h3>
                <p className="text-gray-500">Head of Sales</p>
              </div>
              <div className="text-center">
                <img
                  src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Mark Joe"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold">Mark Johnson</h3>
                <p className="text-gray-500">Marketing Director</p>
              </div>
            </div>
          </section>

          {/* Our Store Location */}
          <section className="my-10">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Our Store Location
            </h2>
            <div className="text-center mb-6">
              <p className="mb-2">
                <strong>Store Address:</strong> 123 Sports Avenue, Cityville,
                USA
              </p>
              <p className="mb-2">
                <strong>Phone:</strong> +1 555 123 4567
              </p>
              <p className="mb-4">
                <strong>Store Hours:</strong> Mon-Sat, 9:00 AM - 8:00 PM
              </p>
            </div>
            <div className="flex justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.9565467514185!2d144.953736315318!3d-37.81720997975181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d47f1977f5f%3A0x1a24ba6f422ba16d!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1631178398002!5m2!1sen!2sau"
                width="600"
                height="450"
                className="border-0"
                allowFullScreen={false}
                loading="lazy"
                title="Our Store Location"
              ></iframe>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
};

export default About;
