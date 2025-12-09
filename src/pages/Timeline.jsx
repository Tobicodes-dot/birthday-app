import '../styles/global.css';
import BottomNav from '../components/shared/bottomNav';
import TimelineList from '../components/timeline/TimelineList';

function Timeline() {
    return (
        <>
          <TimelineList />
          <BottomNav />
        </>
    );
}

export default Timeline