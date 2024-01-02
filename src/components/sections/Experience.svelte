<script>
    import { WORK_EXPERIENCE } from "../../utils/about";
    import PlaceholderImage from '../../assets/heurix.webp'

    export let selectedJob = 0;
    export let job = WORK_EXPERIENCE[0];

    function handleJobChanged(newJob) {
        if(newJob >= 0 && newJob < WORK_EXPERIENCE.length){
            selectedJob = newJob;
            job = WORK_EXPERIENCE[newJob];
        }
	}
</script>


<section id="experience" class="flex flex-col font-poppins text-text bg-primary rounded-3xl flex-1">
    <header class="flex items-center flex-col md:flex-row-reverse">
        <h2 aria-label="Mi experiencia laboral" class="font-bold text-5xl mb-2 bg-white inline p-8 rounded-b-3xl place-self-center ml-0 md:ml-auto -my-1">Experiencia</h2>
        <div class="text-center flex-1">
            <p class="text-xl font-bold">{job.company}</p>
            <div>
                <time datetime={job.date.from} class="text-xl ">{new Date(job.date.from).toLocaleDateString('es', { year: 'numeric', month: 'short' })}</time> 
                -
                <time datetime={job.date.from} class="text-xl ">{new Date(job.date.to).toLocaleDateString('es', { year: 'numeric', month: 'short' })}</time> 
            </div>
        </div>
    </header>
    <div class="h-full p-8 flex items-center gap-8 place-self-center">
        <img class="grayscale" loading="lazy" src={PlaceholderImage.src} alt={job.company}>
        <div>
            <p class="font-bold font-mono text-3xl text-center md:text-left">{job.role}</p>
            <p class="text-center md:text-left">{job.technologies}</p>
        </div>
    </div>

    <ul role="navigation" aria-label="Mis empleos" class="flex gap-4 w-full px-6 mx-auto mb-2">
        {#each WORK_EXPERIENCE as job, index}
            <li class={`h-4 flex-1 rounded-xl hover:scale-105 duration-75 ${index == selectedJob ? 'bg-accent' : 'bg-white'}`}>
                <button tabindex="0" aria-label={`Empleo ${index + 1}`} class="w-full h-full" on:click={() => handleJobChanged(index)}></button>
            </li>
        {/each}
    </ul>

</section>