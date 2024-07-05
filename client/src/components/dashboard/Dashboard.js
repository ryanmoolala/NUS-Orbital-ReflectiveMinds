import {React, useEffect} from 'react';
import './dashboard.css';
import PreviousEntries from './PreviousEntries'; // Import the PreviousEntries component
import { useNavigate, useLocation } from 'react-router-dom'; // Import the useHistory hook
import WordCloud from './WordCloud';
import DateCalendarServerRequest from './calendar';

function Dashboard() {
    const location = useLocation();
    const navigate = useNavigate(); // Get the navigate function
    const userId = location.state?.userId || null;

    useEffect(() => {
      if (userId === null) {
        navigate('/login');
      }
    }, [userId, navigate]); // Add userId and navigate as dependencies

    const handleNewEntryClick = () => {
        navigate('/journalEntry', { state: { userId: userId} }); // Navigate to the newEntry page
    };

    

  return (
    <div className="dashboard">
      <h1 className="app-title">REFLECTIVE MINDS</h1>
      <div className="dashboard-main">
        <div className="journal-intro">
            <h1 className="journal-text">JOURNAL</h1>
            <p className="journal-intro-p">Start writing your <span className="mind">mind</span>.</p>
        </div>
        <div className="new-entry-container">
            <div className="new-entry-btn" onClick={handleNewEntryClick}>
                <i className="fas fa-pen-fancy"></i>
                <p>New Entry</p>
            </div>
        </div>
        <div className="dashboard-mid">
          <div className="dashboard-left">
            <WordCloud userId={userId} />
          </div>
          <div className="dashboard-right">
            <DateCalendarServerRequest userId={userId} />
          </div>
        </div>
        
        
        
        
        <PreviousEntries userId={userId}/> 
      </div>
    </div>
  );
}

export default Dashboard;