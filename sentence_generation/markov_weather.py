import random
weather_chain = {
    'sun': ['sun', 'sun', 'sun', 'sun', 'sun', 'sun', 'sun', 'sun', 'sun', 'rain'],
    'rain': ['sun', 'rain'],
  'cloudy': ['cloudy', 'cloudy', 'sun', 'rain'],
  'airqual': ['goodaq', 'fairaq', 'pooraq'],
  
}

weather = [random.choice(list(weather_chain.keys()))]

for i in range(10):
    weather.append(random.choice(weather_chain[weather[i]]))

print(weather)