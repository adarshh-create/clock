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

        let worldLocations = [
            { name: '🗽 NYC', timezone: 'America/New_York' },
            { name: '🏛️ London', timezone: 'Europe/London' },
            { name: '🗼 Tokyo', timezone: 'Asia/Tokyo' },
            { name: '🕌 Dubai', timezone: 'Asia/Dubai' }
        ];

        let weatherLocations = [
            { name: 'New York', value: 'new-york' },
            { name: 'London', value: 'london' },
            { name: 'Tokyo', value: 'tokyo' },
            { name: 'Dubai', value: 'dubai' },
            { name: 'Paris', value: 'paris' },
            { name: 'Mumbai', value: 'mumbai' },
        ];

        let currentWeatherLocation = '';
        let userLocation = { lat: null, lon: null, city: 'Unknown' };
        function init() {
            updateTime();
            updateMood();
            getUserLocation();
            createParticles();
            loadHistoryEvent();
            initializeWeatherLocations();
            
            setInterval(updateTime, 1000);
            setInterval(updateMood, 60000);
        }

        function getUserLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    position => {
                        userLocation.lat = position.coords.latitude;
                        userLocation.lon = position.coords.longitude;
                        updateWeatherByCoords(userLocation.lat, userLocation.lon);
                    },
                    error => {
                        console.log('Location access denied:', error);
                        updateWeatherByCity('london'); // Default to London
                    }
                );
            } else {
                updateWeatherByCity('london');
            }
        }

        async function updateWeatherByCoords(lat, lon) {
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=your_api_key&units=metric`);
                if (!response.ok) {
                    throw new Error('Weather API not available');
                }
                const data = await response.json();
                updateWeatherDisplay(data);
            } catch (error) {
                console.log('Using mock weather data');
                updateMockWeather();
            }
        }

        async function updateWeatherByCity(city) {
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=your_api_key&units=metric`);
                if (!response.ok) {
                    throw new Error('Weather API not available');
                }
                const data = await response.json();
                updateWeatherDisplay(data);
            } catch (error) {
                console.log('Using mock weather data for', city);
                updateMockWeatherForCity(city);
            }
        }

        function updateWeatherDisplay(data) {
            const weatherIcon = getWeatherEmoji(data.weather[0].main);
            document.getElementById('weatherIcon').textContent = weatherIcon;
            document.getElementById('weatherTemp').textContent = Math.round(data.main.temp) + '°C';
            document.getElementById('weatherDesc').textContent = data.weather[0].description;
            document.getElementById('weatherLocation').textContent = data.name + ', ' + data.sys.country;
        }

        function getWeatherEmoji(condition) {
            const weatherEmojis = {
                'Clear': '☀️',
                'Clouds': '☁️',
                'Rain': '🌧️',
                'Drizzle': '🌦️',
                'Thunderstorm': '⛈️',
                'Snow': '❄️',
                'Mist': '🌫️',
                'Fog': '🌫️'
            };
            return weatherEmojis[condition] || '🌤️';
        }

        function updateMockWeather() {
            const mockWeather = {
                icon: '🌤️',
                temp: Math.floor(Math.random() * 15) + 15,
                desc: 'Partly cloudy',
                location: 'Your Location'
            };
            
            document.getElementById('weatherIcon').textContent = mockWeather.icon;
            document.getElementById('weatherTemp').textContent = mockWeather.temp + '°C';
            document.getElementById('weatherDesc').textContent = mockWeather.desc;
            document.getElementById('weatherLocation').textContent = mockWeather.location;
        }

        function updateMockWeatherForCity(city) {
            const cityWeather = {
                'london': { icon: '🌦️', temp: 18, desc: 'Light rain', location: 'London, UK' },
                'tokyo': { icon: '☀️', temp: 24, desc: 'Clear sky', location: 'Tokyo, JP' },
                'dubai': { icon: '☀️', temp: 32, desc: 'Hot and sunny', location: 'Dubai, AE' },
                'paris': { icon: '☁️', temp: 20, desc: 'Cloudy', location: 'Paris, FR' },
                'mumbai': { icon: '🌧️', temp: 28, desc: 'Monsoon', location: 'Mumbai, IN' },
                'new-york': { icon: '🌤️', temp: 22, desc: 'Partly cloudy', location: 'New York, US' }
            };

            const weather = cityWeather[city] || { icon: '🌤️', temp: 20, desc: 'Pleasant', location: 'Unknown' };
            
            document.getElementById('weatherIcon').textContent = weather.icon;
            document.getElementById('weatherTemp').textContent = weather.temp + '°C';
            document.getElementById('weatherDesc').textContent = weather.desc;
            document.getElementById('weatherLocation').textContent = weather.location;
        }

        function initializeWeatherLocations() {
            const select = document.getElementById('locationSelect');
            weatherLocations.forEach(location => {
                const option = document.createElement('option');
                option.value = location.value;
                option.textContent = location.name;
                select.appendChild(option);
            });
        }

        function changeWeatherLocation() {
            const selectedLocation = document.getElementById('locationSelect').value;
            if (selectedLocation) {
                updateWeatherByCity(selectedLocation);
                currentWeatherLocation = selectedLocation;
            }
        }

        function updateTime() {
            const now = new Date();
            
            document.getElementById('timeDisplay').textContent = now.toLocaleTimeString();
            updateWorldTimes();
        }

        function updateWorldTimes() {
            const container = document.getElementById('worldTimes');
            container.innerHTML = '';
            
            worldLocations.forEach(location => {
                const timeDiv = document.createElement('div');
                timeDiv.className = 'world-time';
                
                const now = new Date();
                const timeInZone = new Date(now.toLocaleString("en-US", {timeZone: location.timezone}));
                const timeString = timeInZone.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
                
                timeDiv.innerHTML = `${location.name}: <span>${timeString}</span>`;
                container.appendChild(timeDiv);
            });
        }
        function updateMood() {
            const hour = new Date().getHours();
            const data = hourlyData[hour];
            
            document.getElementById('moodEmoji').textContent = data.emoji;
            document.getElementById('moodText').textContent = data.text;
            document.getElementById('quoteText').textContent = data.quote;
            
            document.getElementById('energyLevel').textContent = data.energy;
            document.getElementById('priorityTask').textContent = data.task;
            document.getElementById('focusTime').textContent = data.focus;
            document.body.className = data.theme;
            createParticles(data.particle);
        }
        function createParticles(type = 'snow') {
            const container = document.getElementById('particles');
            container.innerHTML = '';
            
            const particleCount = 50;
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

        async function loadHistoryEvent(country = '') {
            const today = new Date();
            const month = today.getMonth() + 1;
            const day = today.getDate();
            
            try {
                let url = `https://en.wikipedia.org/api/rest_v1/feed/onthisday/events/${month}/${day}`;
                const response = await fetch(url);
                const data = await response.json();
                
                let events = data.events || [];
                
                if (country) {
                    events = events.filter(event => 
                        event.text.toLowerCase().includes(country.toLowerCase()) ||
                        (event.pages && event.pages.some(page => 
                            page.extract && page.extract.toLowerCase().includes(country.toLowerCase())
                        ))
                    );
                }
                
                if (events.length > 0) {
                    const randomEvent = events[Math.floor(Math.random() * events.length)];
                    const eventText = `${randomEvent.year}: ${randomEvent.text}`;
                    document.getElementById('historyEvent').innerHTML = eventText;
                } else {
                    loadMockHistoryEvent(country);
                }
            } catch (error) {
                console.log('Wikipedia API not available, using mock data');
                loadMockHistoryEvent(country);
            }
        }

        function loadHistoryForCountry() {
            const selectedCountry = document.getElementById('countrySelect').value;
            document.getElementById('historyEvent').innerHTML = '<div class="loading"></div> Loading historical events...';
            setTimeout(() => {
                loadHistoryEvent(selectedCountry);
            }, 1000);
        }


        window.onclick = function(event) {
            const modal = document.getElementById('locationModal');
            if (event.target === modal) {
                closeLocationModal();
            }
        }
        window.addEventListener('load', init);