export default function FAQ() {
  const faqData = [
    { id: 'first', question: 'How to train your pet?', answer: 'With a little know-how and a lot of patience, you can train your pet to perform many behaviors. Positive reinforcement is the key to strengthening behaviors.' },
    { id: 'second', question: 'How to manage your pet?', answer: 'Through our website, you can communicate with many veterinarians who have extensive experience in treating pets.' },
    { id: 'third', question: 'Whats is the pet grooming?', answer: 'Pet grooming is the process of cleaning and taking care of the physical appearance of pets including bathing, brushing, nail trimming, and ear cleaning.' },
    { id: 'fourth', question: 'How can care with your pet?', answer: 'Feed your pet high-quality food, take them for daily walks, provide timely vaccinations, and maintain a clean environment.' }
  ];

  return (
    <center>
      <section className="Questions">
        <h3>Frequently Asked Questions</h3>
        <div className="drop-info">
          <div className="flex-container">
            <ul className="according">
              {faqData.map((item, index) => (
                <li className="ACC" key={item.id}>
                  <input type="radio" name="accordion" id={item.id} defaultChecked={index === 0} />
                  <label htmlFor={item.id}><b>{item.question}</b></label>
                  <div className="content">
                    <p>{item.answer}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <img src="/assets/feed_back10.jpg" alt="FAQ" style={{ width: '400px', height: '400px' }} />
          </div>
        </div>
      </section>
    </center>
  );
}