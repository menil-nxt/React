import { User } from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="about-cart">
      <h1 className="about-heading">About Us – MJ Food</h1>
      <h3>
        Welcome to MJ Food, your go-to destination for delicious meals delivered
        fresh to your doorstep. We believe great food brings people together,
        and our mission is to make every bite memorable.
      </h3>
      <User
        name="Menil jotaniya (Owner Functional-based)"
        Locality="Bangluru.."
      />
      <UserClass name="Menil jotaniya (Owner Class-based)" Locality="NewYork" />
      <h3>
        At MJ Food, we combine taste, quality, and convenience. Whether you’re
        craving a quick snack, a hearty meal, or something sweet, we’ve got
        something for everyone. Our meals are prepared with fresh ingredients,
        careful attention, and a passion for good food.
      </h3>

      <h2>Our Mission 🚀</h2>
      <h3>
        To bring you flavorful, hygienic, and affordable food anytime, anywhere.
        We aim to provide a smooth online ordering experience and fast delivery
        so you can enjoy your favorite dishes without hassle.
      </h3>

      <h2>What We Offer</h2>
      <h3>A wide range of tasty and freshly prepared dishes</h3>
      <h3>Easy and secure online ordering</h3>
      <h3>Fast and reliable delivery</h3>
      <h3>Friendly customer support</h3>
      <h3>Special offers, combos & daily deals</h3>

      <h2>Why Choose MJ Food?</h2>
      <h3>
        Because we don’t just serve food – we serve happiness. Every order is
        made with care, ensuring you get the best quality and service. Your
        satisfaction inspires us to keep improving and innovating.
      </h3>

      <h2>
        Thank you for choosing MJ Food. We’re excited to be part of your
        everyday meals and special moments.
      </h2>
    </div>
  );
};

export default About;
