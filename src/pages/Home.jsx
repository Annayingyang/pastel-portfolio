import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="zone zone1">
      <h1>🌸 Welcome to Dreany Resume</h1>
      <p>Pick a section to get started:</p>
      <Link to="/create"><button>Create Your Own Resume</button></Link>
      <Link to="/preview"><button>Preview My Resume</button></Link>
      <Link to="/tips/content"><button>What to Write in Your Resume</button></Link>
      <Link to="/tips/employers"><button>How to Impress Employers</button></Link>
    </div>
  );
}

export default Home;
