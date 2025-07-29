const hourlyData = {
            0: { 
                emoji: '🌙', text: 'Midnight Dreaming', period: 'Deep Night', 
                quote: 'The night is darkest just before the dawn. - Thomas Fuller',
                theme: 'winter-night', particle: 'snow',
                energy: 'Low 😴', focus: 'Rest and reflection',
                task: 'Prepare for tomorrow or wind down',
                weather: 'night'
            },
            1: { 
                emoji: '😴', text: 'Sleep Time', period: 'Deep Night',
                quote: 'Sleep is the best meditation. - Dalai Lama',
                theme: 'winter-night', particle: 'snow',
                energy: 'Minimal 💤', focus: 'Deep rest',
                task: 'Sleep and recovery',
                weather: 'night'
            },
            2: { 
                emoji: '💤', text: 'Dream Hours', period: 'Deep Night',
                quote: 'Dreams are the touchstones of our characters. - Henry David Thoreau',
                theme: 'winter-night', particle: 'snow',
                energy: 'Resting 🌙', focus: 'Subconscious processing',
                task: 'Let your mind wander in dreams',
                weather: 'night'
            },
            3: { 
                emoji: '🌌', text: 'Stargazing Time', period: 'Deep Night',
                quote: 'We are all made of star stuff. - Carl Sagan',
                theme: 'winter-night', particle: 'snow',
                energy: 'Contemplative ✨', focus: 'Wonder and reflection',
                task: 'Contemplate the universe',
                weather: 'night'
            },
            4: { 
                emoji: '🌅', text: 'Pre-Dawn Quiet', period: 'Early Dawn',
                quote: 'The early morning has gold in its mouth. - Benjamin Franklin',
                theme: 'spring-dawn', particle: 'petals',
                energy: 'Awakening 🌱', focus: 'Gentle preparation',
                task: 'Prepare for the day ahead',
                weather: 'dawn'
            },
            5: { 
                emoji: '🐓', text: 'Early Riser', period: 'Dawn',
                quote: 'Early to bed and early to rise makes a man healthy, wealthy, and wise. - Benjamin Franklin',
                theme: 'spring-dawn', particle: 'petals',
                energy: 'Fresh 🌅', focus: 'Morning rituals',
                task: 'Start your morning routine',
                weather: 'dawn'
            },
            6: { 
                emoji: '☀️', text: 'Morning Energy', period: 'Early Morning',
                quote: 'Every morning is a fresh beginning. - Joel Osteen',
                theme: 'spring-morning', particle: 'petals',
                energy: 'Rising ☀️', focus: 'Energy building',
                task: 'Exercise or morning walk',
                weather: 'morning'
            },
            7: { 
                emoji: '☕', text: 'Coffee Time', period: 'Morning',
                quote: 'Coffee is a way of stealing time that should by rights belong to your older self. - Terry Pratchett',
                theme: 'spring-morning', particle: 'petals',
                energy: 'Caffeinated ☕', focus: 'Alertness boost',
                task: 'Fuel up and plan your day',
                weather: 'morning'
            },
            8: { 
                emoji: '🏃', text: 'Morning Rush', period: 'Morning',
                quote: 'The way to get started is to quit talking and begin doing. - Walt Disney',
                theme: 'summer-morning', particle: 'leaves',
                energy: 'Active 🏃', focus: 'Getting things done',
                task: 'Tackle important morning tasks',
                weather: 'morning'
            },
            9: { 
                emoji: '🧠', text: 'Peak Focus', period: 'Mid Morning',
                quote: 'Focus on being productive instead of busy. - Tim Ferriss',
                theme: 'summer-morning', particle: 'leaves',
                energy: 'High 🧠', focus: 'Deep work time',
                task: 'Work on your most important project',
                weather: 'morning'
            },
            10: { 
                emoji: '💼', text: 'Work Mode', period: 'Late Morning',
                quote: 'Choose a job you love, and you will never have to work a day in your life. - Confucius',
                theme: 'summer-midday', particle: 'leaves',
                energy: 'Productive 💼', focus: 'Professional tasks',
                task: 'Handle business and meetings',
                weather: 'day'
            },
            11: { 
                emoji: '📈', text: 'Productivity Peak', period: 'Late Morning',
                quote: 'Productivity is never an accident. It is always the result of commitment. - Paul J. Meyer',
                theme: 'summer-midday', particle: 'leaves',
                energy: 'Peak 📈', focus: 'Maximum efficiency',
                task: 'Crush your biggest challenges',
                weather: 'day'
            },
            12: { 
                emoji: '🍽️', text: 'Lunch Break', period: 'Noon',
                quote: 'All happiness depends on a leisurely breakfast. - John Gunther',
                theme: 'summer-midday', particle: 'leaves',
                energy: 'Nourishing 🍽️', focus: 'Refueling',
                task: 'Enjoy a mindful meal',
                weather: 'day'
            },
            13: { 
                emoji: '🥪', text: 'Midday Fuel', period: 'Early Afternoon',
                quote: 'Food is fuel for the body, books fuel for the mind. - Amit Kalantri',
                theme: 'summer-afternoon', particle: 'leaves',
                energy: 'Recharged 🥪', focus: 'Post-meal boost',
                task: 'Continue with renewed energy',
                weather: 'afternoon'
            },
            14: { 
                emoji: '⚡', text: 'Afternoon Power', period: 'Afternoon',
                quote: 'The afternoon knows what the morning never suspected. - Swedish Proverb',
                theme: 'summer-afternoon', particle: 'leaves',
                energy: 'Strong ⚡', focus: 'Power through tasks',
                task: 'Handle complex problems',
                weather: 'afternoon'
            },
            15: { 
                emoji: '🎯', text: 'Focus Time', period: 'Mid Afternoon',
                quote: 'The successful warrior is the average man with laser-like focus. - Bruce Lee',
                theme: 'autumn-afternoon', particle: 'leaves',
                energy: 'Focused 🎯', focus: 'Concentrated effort',
                task: 'Deep focus on priority work',
                weather: 'afternoon'
            },
            16: { 
                emoji: '📚', text: 'Learning Hour', period: 'Late Afternoon',
                quote: 'Live as if you were to die tomorrow. Learn as if you were to live forever. - Mahatma Gandhi',
                theme: 'autumn-afternoon', particle: 'leaves',
                energy: 'Curious 📚', focus: 'Knowledge acquisition',
                task: 'Learn something new',
                weather: 'afternoon'
            },
            17: { 
                emoji: '🏠', text: 'Heading Home', period: 'Early Evening',
                quote: 'Home is where love resides, memories are created, and laughter never ends. - Unknown',
                theme: 'autumn-evening', particle: 'leaves',
                energy: 'Transitioning 🏠', focus: 'Work-life balance',
                task: 'Wrap up work and head home',
                weather: 'evening'
            },
            18: { 
                emoji: '🍳', text: 'Dinner Prep', period: 'Evening',
                quote: 'Cooking is like love. It should be entered into with abandon or not at all. - Harriet Van Horne',
                theme: 'autumn-evening', particle: 'leaves',
                energy: 'Creative 🍳', focus: 'Nurturing activities',
                task: 'Prepare a nourishing meal',
                weather: 'evening'
            },
            19: { 
                emoji: '🍽️', text: 'Dinner Time', period: 'Evening',
                quote: 'The fondest memories are made when gathered around the table. - Unknown',
                theme: 'winter-evening', particle: 'snow',
                energy: 'Social 🍽️', focus: 'Connection and sharing',
                task: 'Enjoy dinner with loved ones',
                weather: 'evening'
            },
            20: { 
                emoji: '📺', text: 'Relaxation Time', period: 'Late Evening',
                quote: 'Rest when you\'re weary. Refresh and renew yourself, your body, your mind, your spirit. - Ralph Marston',
                theme: 'winter-evening', particle: 'snow',
                energy: 'Unwinding 📺', focus: 'Entertainment and leisure',
                task: 'Enjoy some entertainment or hobbies',
                weather: 'evening'
            },
            21: { 
                emoji: '🛁', text: 'Wind Down', period: 'Late Evening',
                quote: 'Take time to make your soul happy. - Unknown',
                theme: 'winter-evening', particle: 'snow',
                energy: 'Calming 🛁', focus: 'Self-care and comfort',
                task: 'Practice self-care and relaxation',
                weather: 'evening'
            },
            22: { 
                emoji: '📖', text: 'Evening Reading', period: 'Pre-Sleep',
                quote: 'A book is a dream that you hold in your hand. - Neil Gaiman',
                theme: 'winter-night', particle: 'snow',
                energy: 'Peaceful 📖', focus: 'Quiet contemplation',
                task: 'Read or journal before sleep',
                weather: 'night'
            },
            23: { 
                emoji: '🌛', text: 'Bedtime Preparation', period: 'Late Night',
                quote: 'Each night, when I go to sleep, I die. And the next morning, when I wake up, I am reborn. - Mahatma Gandhi',
                theme: 'winter-night', particle: 'snow',
                energy: 'Settling 🌛', focus: 'Preparing for rest',
                task: 'Get ready for a good night\'s sleep',
                weather: 'night'
            }
        };

        // Timer variables
        let timerInterval;
        let timerMinutes = 25;
        let timerSeconds = 0;
        let isTimerRunning = false;

        // Voice control
        let voiceEnabled = false;

        // Ambient sounds
        let currentAmbient = null;

        // Initialize app
        function init() {
            updateTime();
            updateMood();
            updateWeather();
            createParticles();
            loadHistoryEvent();
            setInterval(updateTime, 1000);
            setInterval(updateMood, 60000); // Update mood every minute
        }

        // Update time displays
        function updateTime() {
            const now = new Date();
            
            // Local time
            const timeString = now.toLocaleTimeString();
            document.getElementById('timeDisplay').textContent = timeString;
            
            // World times
            document.getElementById('nyTime').textContent = 
                new Date(now.toLocaleString("en-US", {timeZone: "America/New_York"})).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
            document.getElementById('londonTime').textContent = 
                new Date(now.toLocaleString("en-US", {timeZone: "Europe/London"})).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
            document.getElementById('tokyoTime').textContent = 
                new Date(now.toLocaleString("en-US", {timeZone: "Asia/Tokyo"})).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
            document.getElementById('dubaiTime').textContent = 
                new Date(now.toLocaleString("en-US", {timeZone: "Asia/Dubai"})).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        }

        // Update mood based on current hour
        function updateMood() {
            const hour = new Date().getHours();
            const data = hourlyData[hour];
            
            document.getElementById('moodEmoji').textContent = data.emoji;
            document.getElementById('moodText').textContent = data.text;
            document.getElementById('quoteText').textContent = data.quote;
            
            // Update focus section
            document.getElementById('energyLevel').textContent = data.energy;
            document.getElementById('priorityTask').textContent = data.task;
            document.getElementById('focusTime').textContent = data.focus;
            
            // Update body theme
            document.body.className = data.theme;
            
            // Update particles
            createParticles(data.particle);
            
            // Voice announcement
            if (voiceEnabled && 'speechSynthesis' in window) {
                const utterance = new SpeechSynthesisUtterance(`It's ${data.text}. ${data.task}`);
                speechSynthesis.speak(utterance);
            }
        }

        // Create floating particles
        function createParticles(type = 'snow') {
            const container = document.getElementById('particles');
            container.innerHTML = '';
            
            const particleCount = 50;
            const particles = ['❄️', '🌸', '🍃', '✨'];
            let particleEmoji = '❄️';
            
            if (type === 'petals') particleEmoji = '🌸';
            else if (type === 'leaves') particleEmoji = '🍃';
            else if (type === 'stars') particleEmoji = '✨';
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.textContent = particleEmoji;
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 6 + 's';
                particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
                container.appendChild(particle);
            }
        }

        // Update weather (mock data)
        function updateWeather() {
            const weatherConditions = [
                { icon: '☀️', temp: '24°C', desc: 'Sunny' },
                { icon: '⛅', temp: '22°C', desc: 'Partly Cloudy' },
                { icon: '🌧️', temp: '18°C', desc: 'Light Rain' },
                { icon: '🌤️', temp: '26°C', desc: 'Mostly Sunny' }
            ];
            
            const weather = weatherConditions[Math.floor(Math.random() * weatherConditions.length)];
            
            document.getElementById('weatherIcon').textContent = weather.icon;
            document.getElementById('weatherTemp').textContent = weather.temp;
            document.getElementById('weatherDesc').textContent = weather.desc;
        }

        // Pomodoro Timer Functions
        function startTimer() {
            if (!isTimerRunning) {
                isTimerRunning = true;
                timerInterval = setInterval(() => {
                    if (timerSeconds === 0) {
                        if (timerMinutes === 0) {
                            // Timer finished
                            resetTimer();
                            alert('Pomodoro session completed! Take a break.');
                            return;
                        }
                        timerMinutes--;
                        timerSeconds = 59;
                    } else {
                        timerSeconds--;
                    }
                    updateTimerDisplay();
                }, 1000);
            }
        }

        function pauseTimer() {
            isTimerRunning = false;
            clearInterval(timerInterval);
        }

        function resetTimer() {
            isTimerRunning = false;
            clearInterval(timerInterval);
            timerMinutes = 25;
            timerSeconds = 0;
            updateTimerDisplay();
        }

        function updateTimerDisplay() {
            const mins = timerMinutes.toString().padStart(2, '0');
            const secs = timerSeconds.toString().padStart(2, '0');
            document.getElementById('timerDisplay').textContent = `${mins}:${secs}`;
        }

        // Habit Tracker
        function toggleHabit(element, habitName) {
            element.classList.toggle('completed');
            
            // Store in memory (you could extend this to localStorage if needed)
            if (element.classList.contains('completed')) {
                element.style.opacity = '0.6';
                element.style.transform = 'scale(0.95)';
            } else {
                element.style.opacity = '1';
                element.style.transform = 'scale(1)';
            }
        }

        // Ambient Sounds
        function playAmbient(type) {
            stopAmbient();
            currentAmbient = type;
            
            // Mock ambient sound - in real implementation, you'd play actual audio
            const visualizer = document.getElementById('visualizer');
            visualizer.style.display = 'flex';
            
            // Animate visualizer bars
            const bars = visualizer.querySelectorAll('.bar');
            bars.forEach(bar => {
                bar.style.animationPlayState = 'running';
            });
            
            console.log(`Playing ${type} ambient sounds`);
        }

        function stopAmbient() {
            currentAmbient = null;
            const visualizer = document.getElementById('visualizer');
            
            // Stop visualizer animation
            const bars = visualizer.querySelectorAll('.bar');
            bars.forEach(bar => {
                bar.style.animationPlayState = 'paused';
            });
            
            setTimeout(() => {
                visualizer.style.display = 'none';
            }, 500);
        }

        // Voice Control
        function toggleVoice() {
            voiceEnabled = !voiceEnabled;
            const btn = document.getElementById('voiceBtn');
            btn.textContent = voiceEnabled ? '🎤' : '🔇';
            btn.title = voiceEnabled ? 'Voice Enabled' : 'Voice Disabled';
        }

        // Load historical event (mock data)
        function loadHistoryEvent() {
            const events = [
                "1969: Neil Armstrong became the first person to walk on the moon during the Apollo 11 mission.",
                "1789: The French Revolution began with the storming of the Bastille fortress in Paris.",
                "1955: Disneyland opened its doors to the public in Anaheim, California.",
                "1990: The World Wide Web was invented by Tim Berners-Lee at CERN.",
                "1969: The first Woodstock festival began, featuring legendary musical performances."
            ];
            
            const randomEvent = events[Math.floor(Math.random() * events.length)];
            document.getElementById('historyEvent').textContent = randomEvent;
        }

        // Initialize the app when page loads
        window.addEventListener('load', init);