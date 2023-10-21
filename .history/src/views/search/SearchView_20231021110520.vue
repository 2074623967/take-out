<script setup lang="ts">
interface IEmits{
 (e:'cancel'):void
}
const emits=defineProps<IEmits></IEmits>
</script>