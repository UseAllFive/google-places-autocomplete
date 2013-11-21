# Documentation

## Requirements

The following snippet must be placed in head:
```html
<script src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=true&libraries=places"></script>
```

## Example usage

```javascript
var autocomplete = window.placesAutocomplete.create({
    'opts': {
        'componentRestrictions': {
            'country': 'br' //-- Limit to Brazil
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
