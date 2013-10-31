# Documentation

## Example usage

```javascript
window.placesAutocomplete.init({
    "opts": {
        "componentRestrictions": {
            "country": "br" //-- Limit to Brazil
        }
    }
});
```

## Options

| Option        	 | Type          | Arguments  | Default                 |
|--------------------|---------------|------------|-------------------------|
| input_id       	 | string        |            | "location"              |
| opts         	     | object        |  	      | {}                      |
| onChange           | function      | place   	  |	console.log place data  |
