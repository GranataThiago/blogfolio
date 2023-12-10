<script>
    
    export let index = 0;
    let images = [
        {
            src: 'https://res.cloudinary.com/dcb31ckjr/image/upload/v1700952487/como-desarrolle-mi-blog/Palettes_3_qzrhjh.png',
            alt: 'Como construí mi blog' 
        },
        {
            src: 'https://res.cloudinary.com/dcb31ckjr/image/upload/v1700952222/como-desarrolle-mi-blog/Palettes_1_wurflw.png',
            alt: 'Como construí mi blog' 
        },
        {
            src: 'https://res.cloudinary.com/dcb31ckjr/image/upload/v1700952222/como-desarrolle-mi-blog/Palettes_2_gmcuom.png',
            alt: 'Como construí mi blog' 
        }
    ]
    
    function handleImageChange(next = true){
        index = Math.min(Math.max(index + (next ? 1 : -1), 0), images.length - 1);
    }
</script>


<div class="relative font-bold font-mono text-3xl bg-text p-2">
    <div class="absolute -top-4 left-4 bg-text px-2">
        <p class="font-serif text-sm text-background font-light m-0">Paletas de colores</p>
    </div>
    <button class="absolute left-4 top-1/2 hover:scale-105 hover:transition-all" on:click={() => handleImageChange(false)}> &lt; </button>
    <img src={images[index].src} alt={images[index].alt}/>
    <button class="absolute right-4 top-1/2 hover:scale-105 hover:transition-all" on:click={handleImageChange}> &gt; </button>
    <p class="absolute right-4 bottom-4 font-serif text-sm text-accent font-bold m-0">{ index + 1 } / {images.length}</p>

</div>

