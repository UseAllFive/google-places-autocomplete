# Documentation

## Requirements

The following snippet must be placed in head:
```javascript
<script src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=true&libraries=places"></script>
```

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
