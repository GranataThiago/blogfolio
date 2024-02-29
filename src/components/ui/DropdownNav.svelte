<script>
    import { onMount } from "svelte";
    import { fly } from "svelte/transition";
    
    export let showResponsiveMenu = false;
    export let isOpen = false;

    export let ariaLabel = 'toggle menu'

    onMount(() => {
        handleResize();
    });

    function toggleNav(){
        isOpen = !isOpen;
        ariaLabel = isOpen ? 'close menu' : 'toggle menu'
    }

    function handleResize(){
        const isScreenLarge = window.innerWidth >= 768;
        isOpen = false;
        showResponsiveMenu = !isScreenLarge;
    }

    const links = [
        {
            displayName: 'Inicio',
            href: '/#home'
        },
        {
            displayName: 'Sobre mí',
            href: '/#about'
        },
        {
            displayName: 'Proyectos',
            href: '/#projects'
        },
        {
            displayName: 'Contacto',
            href: '/#contact'
        },
    ]
</script>

<svelte:window on:resize={handleResize} />
<nav class="mt-auto mb-auto md:visible">
    <button class="relative z-20"  hidden={!showResponsiveMenu} on:click={toggleNav} aria-expanded={isOpen} aria-label={ariaLabel}>
        <span class="block w-8 h-1 mb-2 bg-text"></span>
        <span class="block w-8 h-1 mb-2 bg-text"></span>
        <span class="block w-8 h-1 mb-2 bg-text"></span>
    </button>
        {#if isOpen}
            <ul transition:fly={{ y: -200, duration: 400 }} class="flex items-center gap-8 font-mono font-bold flex-col absolute pt-20 z-10 top-0 left-0  bg-background w-full h-full">
                {#each links as link}
                    <li>
                        <a on:click={toggleNav} href={link.href}>{link.displayName}</a> 
                    </li>
                {/each}
            </ul>
        {:else if !isOpen && !showResponsiveMenu}
            <ul class="flex items-center gap-8 font-mono font-bold flex-row ">
                {#each links as link}
                <li>
                    <a href={link.href}>{link.displayName}</a> 
                </li>
                {/each}
            </ul>
        {/if}
        

</nav>
