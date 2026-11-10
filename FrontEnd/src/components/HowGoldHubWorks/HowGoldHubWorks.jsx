
import styles from "./HowGoldHubWorks.module.css";

const steps = [
  {
    number: "01",
    icon: <i class="fa-solid fa-magnifying-glass"></i>,
    title: "Search",
    description: "Search for the design or size you need.",
  },
  {
    number: "02",
    icon: <i class="fa-solid fa-ring"></i>,
    title: "Explore Products",
    description: "Compare available products and shops.",
  },
  {
    number: "03",
    icon: <i class="fa-solid fa-location-crosshairs"></i>,
    title: "Find a Shop",
    description: "Get shop details and contact the seller.",
  },
];

export default function HowGoldHubWorks() {
  return (
    <section className={styles.howItWorks} id="how-it-works">
      <div className={styles.container}>
        <span className={styles.eyebrow}>
          SIMPLE & EASY
        </span>

        <h2 className={styles.heading}>
          How <span>GoldHub</span> Works
        </h2>

        <p className={styles.subtitle}>
          Find your perfect piece of gold in three
          simple steps.
        </p>

        <div className={styles.steps}>
          {steps.map((step, index) => (
            <div className={styles.step} key={step.number}>
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>
                  {step.icon}
                </span>
              </div>

              <span className={styles.number}>
                {step.number}
              </span>

              <h3>{step.title}</h3>

              <p>{step.description}</p>

              {index < steps.length - 1 && (
                <span className={styles.arrow}>→</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}