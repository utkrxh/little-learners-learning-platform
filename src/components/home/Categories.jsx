import SectionTitle from "../common/SectionTitle";
import Card from "../common/Card";

function Categories() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">

      <SectionTitle
        title="Choose Your Adventure 🌈"
        subtitle="Pick your favourite way to learn."
      />

      <div className="grid md:grid-cols-3 gap-10">

       <Card
  emoji="🔤"
  title="English"
  description="Learn letters, words and reading in a fun way."
  link="/english"
/>

<Card
  emoji="🔢"
  title="Mathematics"
  description="Addition, subtraction, multiplication and more."
  link="/maths"
/>

<Card
  emoji="📚"
  title="Stories"
  description="Colorful stories with beautiful illustrations."
  link="/stories"
/>

<Card
  emoji="🎮"
  title="Games"
  description="Play educational games while learning."
  link="/games"
/>

<Card
  emoji="🎨"
  title="Activities"
  description="Drawing, colouring and creative fun."
  link="/activities"
/>

<Card
  emoji="🧩"
  title="Puzzles"
  description="Boost your thinking with brain challenges."
  link="/puzzles"
/>
      </div>

    </section>
  );
}

export default Categories;