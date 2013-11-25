# Documentation

## Requirements

The following snippet must be placed in head:
```html
<script src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=true&libraries=places"></script>
```

## Example usage

```javascript
var autocomplete = window.placesAutocomplete.create({
    'input': elem,
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

## Methods

| Method              | Status        | Arguments    | Example                                                      |
|---------------------|---------------|--------------|--------------------------------------------------------------|
| init                | deprecated    | options      | (see above)                                                  |
| create              |               | options      | (see above)                                                  |
| remove              |               | Autocomplete | placesAutocomplete.remove(autocomplete);                     |
| setContainerContext |               | context      | placesAutocomplete.setContainerContext('component-context'); |
