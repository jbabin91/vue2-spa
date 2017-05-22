<template>
    <div class="ParamDetails">
        <span>The parameter value that was passed to me is: {{ $route.params.id }}</span>
    </div>
</template>

<script>
    export default {
        name: 'ParamDetails'
    }
</script>