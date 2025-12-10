<<<<<<< HEAD
<!--section:asset-overview-->
=======
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
>>>>>>> eb8adc2 (fix: map and asset page now functioning, pulls data as expected)

::IDs::
[Place Reference] {{ ha.system_reference_numbers.uuid.resourceid }}
{{#if ha.heritage_asset_references.hb_number }}
[HB No.] {{ ha.heritage_asset_references.hb_number }}
{{/if}}
{{#if ha.heritage_asset_references.smr_number }}
[SMR No.] {{ ha.heritage_asset_references.smr_number }}
{{/if}}
{{#if ha.heritage_asset_references.ihr_number }}
[IHR No.] {{ ha.heritage_asset_references.ihr_number }}
{{/if}}
<<<<<<< HEAD
::end::

::Names::
{{#if (includes ha.monument_names "monument_name_use_type" "Primary")}}
{{#each ha.monument_names}}
{{#if (equal monument_name_use_type "Primary")}}
[Place Name] {{{ monument_name }}}
{{/if}}
{{/each}}
{{#each ha.monument_names}}
{{#if (not monument_name_use_type "Primary")}}
[Alternative Name] {{{ monument_name }}}
{{/if}}
{{/each}}
{{else}}
{{#each ha.monument_names}}
{{#if @first}}
[Place Name] {{{ monument_name }}}
{{else}}
[Alternative Name] {{{ monument_name }}}
{{/if}}
{{/each}}
{{/if}}
::end::
=======
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
>>>>>>> eb8adc2 (fix: map and asset page now functioning, pulls data as expected)

::Classification::
{{#if ha.category_type }}
[Category] {{{ ha.category_type }}}
{{/if}}
{{#if ha.monument_type_n1 }}
[Monument Type] {{{ ha.monument_type_n1 }}}
{{/if}}
{{#each ha.characterization }}
[Characterization] {{{ . }}}
{{/each}}
::end::

::Item Type::
{{#each ha.construction_phases}}
{{#if phase_classification.monument_type }}
{{#each phase_classification.monument_type}}
[Place Type] {{{ . }}}
{{/each}}
{{/if}}
{{/each}}
::end::

::Condition::
{{#if ha.condition_type }}
[Condition Type] {{{ ha.condition_type }}}
{{/if}}
{{#if ha.condition_description.condition }}
[Condition] {{{ ha.condition_description.condition }}}
{{/if}}
::end::

::Address::
{{#each ha.location_data.addresses }}
{{#if building_name.building_name_value }}
[Building Name] {{ building_name.building_name_value }}
{{/if}}
{{#if full_address }}
[Full Address] {{{ replace (replace full_address "_x000D_" "") "\n" "<br/>" }}}
{{/if}}
{{#if street.street_value }}
[Street Address] {{{ street.street_value }}}
{{/if}}
{{#if town_or_city.town_or_city_value }}
[Town/City] {{{ town_or_city.town_or_city_value }}}
{{/if}}
{{#if townlands.townland }}
[Townland] {{{ townlands.townland }}}
{{/if}}
{{#if county.county_value }}
[County] {{{ county.county_value }}}
{{/if}}
{{#if locality.locality_value }}
[Ward] {{ locality.locality_value }}
{{/if}}
{{#if postcode.postcode_value }}
[Postcode] {{ postcode.postcode_value }}
{{/if}}
{{/each}}
::end::

::Real Property Description (Lot on Plan)::
{{#each ha.location_data.area_assignments.area_assignment }}
{{#each lot_on_plan }}
[Lot on Plan] {{ lot }}/{{ plan }}
{{/each}}
{{/each}}
::end::

{{#each ha.descriptions}}
{{#if (equal (clean description_type) "Summary") }}
:: {{ clean description_type }} ::
{{{ description }}}
::end::
{{/if}}
{{/each}}

::Statement of Cultural Heritage Significance (Criteria)::
{{#each ha.designation_and_protection_assignment }}
{{#if local_heritage_list_criteria_type }}
<h3>Criterion {{ local_heritage_list_criteria_type }}</h3>
{{/if}}

{{{ designation_names.designation_name }}}

{{/each}}
::end::

{{#each ha.descriptions}}
{{#if (equal (clean description_type) "History") }}
:: {{ clean description_type }} ::
{{{ description }}}
::end::
{{/if}}
{{/each}}

{{#each ha.descriptions}}
{{#if (equal (clean description_type) "Description") }}
:: {{ clean description_type }} ::
{{{ description }}}
::end::
{{/if}}
{{/each}}

{{#each ha.descriptions}}
{{#if (equal (clean description_type) "Reference") }}
:: References ::
{{{ description }}}
::end::
{{/if}}
{{/each}}

{{#each ha.descriptions}}
{{#if (equal (clean description_type) "Boundary Description") }}
:: {{ clean description_type }} ::
{{{ description }}}
::end::
{{/if}}
{{/each}}

{{#each ha.descriptions}}
{{#if (equal (clean description_type) "Process Statement") }}
:: {{ clean description_type }} ::
{{{ description }}}
::end::
{{/if}}
{{/each}}

<!--section:asset-location-->

::Address::
{{#each ha.location_data.addresses }}
{{#if county.county_value }}
[Local Government Area] {{{ county.county_value }}}
{{/if}}
{{#if street.street_value }}
[Street Address] {{ street.street_value }}
{{/if}}
{{#if town_or_city.town_or_city_value }}
[Suburb] {{ town_or_city.town_or_city_value }}
{{/if}}
{{#if postcode.postcode_value }}
[Postcode] {{ postcode.postcode_value }}
{{/if}}
{{/each}}
::end::

{{#each ha.location_data.geometry}}
{{#if (or (equal (clean feature_shape) "Centroid") (equal (clean feature_shape) "Feature")) }}
{{#if geospatial_coordinates }}
::Geometry::
[Coordinates] {{ pointToCoords geospatial_coordinates }}
::end::
{{/if}}
{{/if}}
{{/each}}

::Administrative Areas::
{{#each ha.location_data.localities_administrative_areas }}
[{{{ clean area_type }}}] {{{ area_names.area_name }}}
{{/each}}
{{#if ha.location_data.council }}
[Council] {{{ ha.location_data.council }}}
{{/if}}
::end::

::Area Assignments::
{{#each ha.location_data.area_assignments.area_assignment }}
[Area Reference] {{{ area_reference.area_reference_value }}}
{{/each}}
::end::

::Location Descriptions::
{{#each ha.location_data.location_descriptions }}
{{{ location_description }}}
{{/each}}
::end::

::Spatial Metadata::
{{#if ha.location_data.geometry.0.current_base_map.current_base_map_names.current_base_map_name }}
[OS Map No.] {{ ha.location_data.geometry.0.current_base_map.current_base_map_names.current_base_map_name }}
{{/if}}
{{#if ha.location_data.geometry.0.spatial_metadata_descriptions.spatial_metadata_notes }}
[Geometric Properties] {{ ha.location_data.geometry.0.spatial_metadata_descriptions.spatial_metadata_notes }}
{{/if}}
{{#if ha.location_data.national_grid_references.irish_grid_reference_tm65_ }}
[Grid Reference] {{ ha.location_data.national_grid_references.irish_grid_reference_tm65_ }}
{{/if}}
::end::

<!--section:asset-further-information-->

::Type::
{{#each ha.construction_phases }}
{{#if phase_classification.monument_type }}
{{#each phase_classification.monument_type }}
[Type] {{{ . }}}
{{/each}}
{{/if}}
{{/each}}
::end::

::Themes::
{{#each ha.use_phase }}
{{#each use_phase_classification.functional_type }}
[Theme] {{ . }}
{{/each}}
{{/each}}
::end::

{{#if (any ha.construction_phases "construction_phase_timespan") }}
:: Construction Period ::
{{#each ha.construction_phases}}
{{#if construction_phase_timespan }}
{{#if (and construction_phase_timespan.construction_phase_start_date (not construction_phase_timespan.construction_phase_start_date "nan")) }}
{{{ construction_phase_timespan.construction_phase_start_date }}}{{#if construction_phase_timespan.construction_phase_end_date }} - {{{ construction_phase_timespan.construction_phase_end_date }}}{{/if}}
{{else}}
{{#if (and construction_phase_timespan.construction_phase_end_date (not construction_phase_timespan.construction_phase_end_date "nan")) }}
{{{ construction_phase_timespan.construction_phase_end_date }}}
{{/if}}
{{/if}}
{{/if}}
{{ phase_classification.phase_classification_description.phase_description }}<br/>

{{/each}}
::end::
{{/if}}

{{#if (any ha.construction_phases "cultural_period") }}
::Historical Period::
{{#each ha.construction_phases }}
{{#if cultural_period }}
[Historical Period] {{{ cultural_period }}}
{{/if}}
{{/each}}
::end::
{{/if}}

{{#if (any ha.construction_phases "style") }}
::Style::
{{#each ha.construction_phases }}
{{#if style }}
[Style] {{{ style }}}
{{/if}}
{{/each}}
::end::
{{/if}}

::Use Phases::
{{#each ha.use_phases }}
[Use Phase] {{ . }}
{{/each}}
::end::

::Dates::
{{#each ha.construction_phases }}
{{#if construction_phase_timespan.construction_phase_display_date }}
[Date] {{ construction_phase_timespan.construction_phase_display_date }}
{{/if}}
{{/each}}
{{#if ha.sign_off.input_date.input_date_value }}
[Record Established] {{{ ha.sign_off.input_date.input_date_value }}}
{{/if}}
::end::

::Designation::
{{#each ha.designation_and_protection_assignment }}
{{#if designation_names.designation_name }}
[Name] {{ designation_names.designation_name }}
{{/if}}
{{#if grade }}
[Grade] {{{ grade }}}
{{/if}}
{{#if designation_or_protection_type }}
[Type] {{{ designation_or_protection_type }}}
{{/if}}
{{#if scheduling_criteria }}
[Criteria for Listing] {{{ join scheduling_criteria ", " }}}
{{/if}}
{{#if local_heritage_list_criteria_type }}
[Criteria] {{ local_heritage_list_criteria_type }}
{{/if}}
{{#if designation_and_protection_timespan.designation_start_date }}
[Start Date] {{{ designation_and_protection_timespan.designation_start_date }}}
{{/if}}
{{#if designation_and_protection_timespan.designation_amendment_date }}
[Amendment Date] {{{ designation_and_protection_timespan.designation_amendment_date }}}
{{/if}}
{{#if designation_and_protection_timespan.designation_end_date }}
[End Date] {{{ designation_and_protection_timespan.designation_end_date }}}
{{/if}}
{{#if extent_of_designation_or_protection.description_of_extent }}
[Extent] {{ extent_of_designation_or_protection.description_of_extent }}
{{/if}}
{{/each}}
::end::

{{#if ha.associated_actors.length}}
::People::
{{#each ha.associated_actors }}
[{{#if associated_actor.role_type }} {{{ associated_actor.role_type }}} {{else}} Related Person {{/if}}] {{#if associated_actor.actor }} {{{ associated_actor.actor }}} {{else}} (untitled) {{/if}}
{{/each}}
::end::
{{/if}}

{{#if ecrs}}
::External Cross References::
{{#each ecrs }}
{{#if (or external_cross_reference (clean external_cross_reference_source)) }}
[{{{ default (clean external_cross_reference_source) "Source" }}}] {{ default external_cross_reference "(untitled)" }}{{#if external_cross_reference_notes.external_cross_reference_description_type }} — {{ external_cross_reference_notes.external_cross_reference_description_type }}{{/if}}{{#if external_cross_reference_notes.external_cross_reference_description }}: {{ external_cross_reference_notes.external_cross_reference_description }}{{/if}}
{{/if}}
{{/each}}
::end::
{{/if}}

<<<<<<< HEAD
{{#if images }}
::Images::
=======
## Images

{{#if images.length }}
| &nbsp; | Image | &nbsp; |
| - | ----- | - |
>>>>>>> eb8adc2 (fix: map and asset page now functioning, pulls data as expected)
{{#each images }}
[Image {{ plus @index 1 }}] {{ image.external_cross_reference }} {{dialogLink id=(concat "image_" index) linkText="Show"}}
{{/each}}
<<<<<<< HEAD
::end::
{{/if}}

{{#if files }}
::Files::
=======
{{else}}
<em>No images available</em>
{{/if}}

## Files

{{#if files.length }}
| &nbsp; | Name | File
| ----- | - | - |
>>>>>>> eb8adc2 (fix: map and asset page now functioning, pulls data as expected)
{{#each files }}
[File {{ plus @index 1 }}] <a href="{{ nospace url }}">{{ defaulty external_cross_reference_notes.external_cross_reference_description "Download" }}</a> — {{ external_cross_reference }}
{{/each}}
<<<<<<< HEAD
::end::
=======
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
>>>>>>> eb8adc2 (fix: map and asset page now functioning, pulls data as expected)
{{/if}}
