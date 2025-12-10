## Names

{{#if ha.display_name }}
<em>{{ ha.display_name }}</em>
{{/if}}

{{#if ha.monument_names.length }}
{{#each ha.monument_names }}
- {{ monument_name }}
{{/each}}
{{else}}
<em>No names recorded</em>
{{/if}}

## Classification

{{#if ha.category_type }}
[Category Type](@category_type): {{{ ha.category_type }}}
{{/if}}

{{#if ha.monument_type_n1 }}
[Heritage Asset Type](@monument_type_n1): {{{ ha.monument_type_n1 }}}
{{/if}}

{{#if ha.characterization.length }}
[Characterization](@characterization):

{{#each ha.characterization }}
- {{{ . }}}
{{/each}}
{{/if}}

{{#if ha.historical_period_type.length }}
{{#each ha.historical_period_type }}
[Period](@historical_period_type): {{{ . }}}
{{/each}}
{{/if}}

{{#if ha.designation_and_protection_assignment.length }}
{{#each ha.designation_and_protection_assignment }}
{{#if designation_or_protection_type }}
[Designation Type](@designation_or_protection_type): {{{ designation_or_protection_type }}}
{{/if}}
{{/each}}
{{/if}}

{{#unless (or ha.category_type (or ha.monument_type_n1 (or ha.characterization.length (or ha.historical_period_type.length ha.designation_and_protection_assignment.length)))) }}
<em>No classification information available</em>
{{/unless}}

## Reference Numbers

{{#if ha.heritage_asset_references.hb_number }}
[HB No.](@hb_number): {{ ha.heritage_asset_references.hb_number }}

{{/if}}
{{#if ha.heritage_asset_references.smr_number }}
[SMR No.](@smr_number): {{ ha.heritage_asset_references.smr_number }}

{{/if}}
{{#if ha.heritage_asset_references.ihr_number }}
[IHR No.](@ihr_number): {{ ha.heritage_asset_references.ihr_number }}

{{/if}}
{{#if ha.system_reference_numbers.uuid.resourceid }}
[Reference ID](@resourceid): {{ ha.system_reference_numbers.uuid.resourceid }}

{{/if}}
{{#if ha.system_reference_numbers.primaryreferencenumber.primary_reference_number }}
[Primary Reference](@primary_reference_number): {{ ha.system_reference_numbers.primaryreferencenumber.primary_reference_number }}

{{/if}}
{{#unless (or ha.heritage_asset_references.hb_number (or ha.heritage_asset_references.smr_number (or ha.heritage_asset_references.ihr_number (or ha.system_reference_numbers.uuid.resourceid ha.system_reference_numbers.primaryreferencenumber.primary_reference_number)))) }}
<em>No reference numbers available</em>
{{/unless}}

## Summary

{{#if ha.condition_type }}
[Condition Type](@condition_type): {{{ ha.condition_type }}}
{{else if ha.condition_description.condition }}
[Condition](@condition): {{{ ha.condition_description.condition }}}
{{else}}
<em>No condition information available</em>
{{/if}}

## Descriptions

{{#if ha.descriptions.length }}
[Descriptions](@descriptions)

{{#each ha.descriptions }}

### {{{ clean description_type }}}

{{{ replace (replace description "_x000D_" "") "\n" "<br/>" }}}

---

{{/each}}
{{else}}
<em>No descriptions available</em>
{{/if}}

## Use Phases

{{#if ha.use_phase.length }}
{{#each ha.use_phase }}
[Use Phase](@use_phase): {{ . }}
{{/each}}
{{else}}
<em>No use phase information available</em>
{{/if}}

## Construction Phases

{{#if ha.construction_phases.length }}
{{#each ha.construction_phases }}
[Asset type](@monument_type): {{{ phase_classification.monument_type }}}

---

{{/each}}
{{else}}
<em>No construction phase information available</em>
{{/if}}

## Location

### Addresses

{{#if ha.location_data.addresses.length }}
{{#each ha.location_data.addresses }}
| Address |       |
| --- | ----- |
{{#if building_name.building_name_value }}
| [Building Name](@building_name) | {{ building_name.building_name_value }} |
{{/if}}
{{#if full_address }}
| [Full Address](@full_address) | {{{ nl (replace full_address "_x000D_" "") "<br/>" }}} |
{{/if}}
{{#if town_or_city.town_or_city_value }}
| [Town/City](@town_or_city) | {{ town_or_city.town_or_city_value }} |
{{/if}}
{{#if townlands.townland }}
| [Townland](@townlands) | {{{ townlands.townland }}} |
{{/if}}
{{#if county.county_value }}
| [County](@county) | {{{ county.county_value }}} |
{{/if}}
{{#if locality.locality_value }}
| [Ward](@locality) | {{ locality.locality_value }} |
{{/if}}

{{/each}}
{{else}}
<em>No address information available</em>
{{/if}}

### Administrative Areas

{{#if ha.location_data.localities_administrative_areas.length }}
| Area | Name |
| ---- | ---- |
{{#each ha.location_data.localities_administrative_areas }}
| [{{{ clean area_type }}}](@localities_administrative_areas) | {{{ area_names.area_name }}} |
{{/each}}
{{#if ha.location_data.council }}
| [Council](@council) | {{{ ha.location_data.council }}} |
{{/if}}
{{else}}
<em>No administrative area information available</em>
{{/if}}

### Geographic Details

[OS Map No.](@current_base_map_name): {{ defaulty ha.location_data.geometry.current_base_map.current_base_map_names.current_base_map_name "(not recorded)" }}

{{#if ha.location_data.geometry.spatial_metadata_descriptions.spatial_metadata_notes }}
[Geometric Properties](@spatial_metadata_notes): {{ ha.location_data.geometry.spatial_metadata_descriptions.spatial_metadata_notes }}
{{/if}}

[Grid Reference](@irish_grid_reference_tm65_): {{ defaulty ha.location_data.national_grid_references.irish_grid_reference_tm65_ "(not recorded)" }}

{{#if ha.location_data.location_descriptions.length }}
### Location Descriptions

{{#each ha.location_data.location_descriptions }}
{{#if location_description }}
- {{{ location_description }}}
{{/if}}
{{/each}}
{{/if}}

## Dates

{{#if ha.construction_phases.length }}
{{#each ha.construction_phases }}
{{#if construction_phase_timespan.construction_phase_display_date }}
[Construction](@construction_phase_display_date): {{ construction_phase_timespan.construction_phase_display_date }}
{{/if}}
{{/each}}
{{/if}}

{{#if ha.sign_off.input_date.input_date_value }}
[Record established](@input_date): {{{ ha.sign_off.input_date.input_date_value }}}
{{/if}}

{{#unless (or ha.construction_phases.length ha.sign_off.input_date.input_date_value) }}
<em>No date information available</em>
{{/unless}}

## People &amp; Organisations

{{#if ha.associated_actors.length }}
{{#each ha.associated_actors }}
### {{{ associated_actor.role_type }}}

{{{ associated_actor.actor }}}

{{/each}}
{{else}}
<em>No associated people or organisations recorded</em>
{{/if}}

## Designation

{{#if ha.designation_and_protection_assignment.length }}
{{#each ha.designation_and_protection_assignment }}

| {{{ default designation_or_protection_type "N/A" }}} | &nbsp; |
| ------ | ------ |
{{#each designation_and_protection_timespan.recommended_designation_type }}
| [Recommended Designation](@recommended_designation_type) | {{{ . }}} |
{{/each}}
{{#if designation_names.designation_name }}
| [Name](@designation_name) | {{ designation_names.designation_name }} |
{{/if}}
{{#if grade }}
| [Grade](@grade) | {{{ default grade "N/A" }}} |
{{/if}}
{{#if scheduling_criteria }}
| [Criteria for Listing](@scheduling_criteria) | {{{ join scheduling_criteria ", " }}} |
{{/if}}
{{#if designation_and_protection_timespan.designation_start_date }}
| [Start Date](@designation_start_date) | {{{ designation_and_protection_timespan.designation_start_date }}} |
{{/if}}
{{#if designation_and_protection_timespan.designation_amendment_date }}
| [Amendment Date](@designation_amendment_date) | {{{ designation_and_protection_timespan.designation_amendment_date }}} |
{{/if}}
{{#if designation_and_protection_timespan.designation_end_date }}
| [End Date](@designation_end_date) | {{{ designation_and_protection_timespan.designation_end_date }}} |
{{/if}}
{{#if extent_of_designation_or_protection }}
{{#each extent_of_designation_or_protection }}
{{#if description_of_extent }}
| [Description of Extent](@description_of_extent) | {{{ nl description_of_extent "<br/>" }}} |
{{/if}}
{{#if geospatial_extent }}
| [Geospatial Extent](@geospatial_extent) | (see map) |
{{/if}}
{{/each}}
{{/if}}

{{/each}}
{{else}}
<em>No designation information available</em>

_NB: some physical assets have overlapping entries across multiple records, which could carry designations._
{{/if}}

## Images

{{#if images.length }}
| &nbsp; | Image | &nbsp; |
| - | ----- | - |
{{#each images }}
| Image {{ plus @index 1 }} | {{ image.external_cross_reference }} | {{dialogLink id=(concat "image_" index) linkText="Show"}} |
{{/each}}
{{else}}
<em>No images available</em>
{{/if}}

## Files

{{#if files.length }}
| &nbsp; | Name | File
| ----- | - | - |
{{#each files }}
| File {{ plus @index 1 }} | {{ external_cross_reference }} | [{{ defaulty external_cross_reference_notes.external_cross_reference_description "Download"}}]({{ nospace (clean url) }}) |
{{/each}}
{{else}}
<em>No files available</em>
{{/if}}

## Cross References

{{#if ecrs.length }}
| &nbsp; | Name | Description
| ----- | - | - |
{{#each ecrs }}
| {{ plus @index 1 }} | {{ external_cross_reference }} | {{ external_cross_reference_notes.external_cross_reference_description }} |
{{/each}}
{{else}}
<em>No cross references available</em>
{{/if}}
