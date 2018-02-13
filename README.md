# dp-create-badge
Create badge based on supplied percentage

## Installation
```bash
npm install dp-create-badge
```

alternatively you can also install it globally.

### Usage
```bash
./node_modules/.bin/dp-create-badge --PERCENTAGE 95
```
This will create a coverage.svg with percentage as 95%.

## Configuration
### Text
![Badge](https://raw.githubusercontent.com/daniepaul/dp-create-badge/master/badges/text.svg?sanitize=true)
```bash
./node_modules/.bin/dp-create-badge --TEXT custom
```

### Color
![Badge](https://raw.githubusercontent.com/daniepaul/dp-create-badge/master/badges/color.svg?sanitize=true)
```bash
./node_modules/.bin/dp-create-badge --COLOR blue
```

### Percentage
![Badge](https://raw.githubusercontent.com/daniepaul/dp-create-badge/master/badges/percentage.svg?sanitize=true)
```bash
./node_modules/.bin/dp-create-badge --PERCENTAGE 95
```
Note: If color is not supplied, the color code is automatically decided based on the percentage value.

### Filepath
```bash
./node_modules/.bin/dp-create-badge --FILEPATH ./badge.svg
```