{{ ha.system_reference_numbers.uuid.resourceid }}

{{#each ha.location_data.addresses }}
{{ street.street_value }} , {{ town_or_city.town_or_city_value }} , {{ postcode.postcode_value }}
{{ county.county_value }}
{{/each}}

{{ ha.record_type }}

{{ title }}

{{ title }}

{{#each ha.monument_names }}
- {{ monument_name }}
{{/each}}

{{#each ha.location_data.addresses }}
{{ street.street_value }} 
{{ town_or_city.town_or_city_value }}
{{ postcode.postcode_value }}
{{/each}}

{{#each ha.descriptions }}
{{#if (in (toString description_type) (array "Notes" "Summary")) }}
{{{ replace description "_x000D_" "" }}}
{{/if}}
{{/each}}

$$$

|                     |                                                                                                                                                                |
| ---------------     | -------------------------------------------------                                                                                                              |
| **ID:**             | {{ ha.system_reference_numbers.uuid.resourceid }}                                                                                                              |
{{#each ha.location_data.addresses }}
{{#if county.county_value }}
| **LGA:** | {{ county.county_value }} |
{{/if}}
{{/each}}
{{#each ha.designation_and_protection_assignments }}
{{#if designation_names.designation_name_use_type._ }}
| **Classification:** | {{ designation_names.designation_name_use_type._ }} |
{{/if}}
{{/each}}
{{#each ha.location_data.addresses }}
{{#if street.street_value }}
| **Location:**       | {{ street.street_value }}, {{#if town_or_city.town_or_city_value }}{{ town_or_city.town_or_city_value }}{{/if}} |
{{/if}}
{{/each}}
