import './result.scss'
import '../base.scss'
import Link from 'next/link';

const ResultContent = () => {
    return (
        <div className='result-wrapper'>
            <span className="result-header">
                Result
            </span>
            <span className='result-text main-text'>
                Overall Insight into Pain and Daily Life: Your pain, though a unique experience, shares common threads with others’ experiences. It's a subtle reminder of the universal human condition, where physical discomfort intermingles with daily life, mood, and activities. Your resilience in the face of pain reflects a universal strength that many find within themselves.
                <br /><br />
                The Mind-Body Connection Insight: Your description of pain and its effects on your daily life highlights the profound connection between mind and body. This intertwined relationship suggests that emotional well-being and physical health are deeply linked, a concept that resonates with many on their journey to holistic wellness.
                <br /><br />
                Adaptability and Resilience Insight: How you navigate through days of varying pain intensity and duration shows remarkable adaptability and resilience. This shared human experience underlines the importance of being flexible and compassionate with oneself, a trait many strive to develop in their own lives.
                <br /><br />
                Pain Management as a Personal Journey Insight: Your approach to managing pain, whether through medication, lifestyle changes, or coping strategies, reflects a personal journey that many embark on. This journey underscores the importance of self-awareness and the pursuit of individualized solutions for health and well-being.
                <br /><br />
                Impact of External Factors Insight: Your observations about how external factors like diet, activity, and sleep affect your pain mirror a common experience. This understanding emphasizes the role of environmental and lifestyle factors in well-being, a realization that resonates with many in their own health journeys.
                Emotional Resonance of Pain Insight: The way pain influences your mood and interactions is a testament to its profound emotional impact. This aspect of pain is a shared human experience, reminding us of the importance of emotional support and understanding in coping with physical discomfort.
                <br /><br />
                Pain as a Teacher Insight: Your experience with pain, from its triggers to its alleviation, acts as a teacher, guiding you to better understand and care for your body. This role of pain as an educator is a common thread in many people's lives, highlighting the importance of listening to and learning from our bodies.
                <br /><br />
                Holistic Health Perspective Insight: Your reflections on pain and its relation to different aspects of your life underscore the value of a holistic view of health. This perspective, considering physical, emotional, and lifestyle factors, is a shared ideal in the pursuit of overall well-being.
                <br /><br />
                Shared Human Experience Insight: Your descriptions of pain and its varying effects on your life echo a universal human experience. It's a reminder that pain, in its many forms, is a common thread that connects us, emphasizing the shared aspects of the human condition.
                <br /><br />
                The Journey of Self-Discovery Insight: Dealing with pain and its multifaceted impact on your life is a journey of self-discovery. This path, while uniquely yours, is a road many travel, finding strength and insights about themselves along the way. This shared journey speaks to the resilience and adaptability inherent in all of us.
            </span>
            <Link href='/'>
                <button className='btn-1'>Go to calendar</button>
            </Link>
        </div>
    )
}

export default ResultContent;