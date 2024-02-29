<script>

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log('Handle Submit')
        const formData = new FormData(e.currentTarget);
        try{
            const response = await fetch('/api/sendEmail.json', {
                method: 'POST',
                body: formData,
            })
            console.log(response)
            const data = await response.json();
            console.log(data)
        }catch(err){
            console.log(err)
        }

    }


</script>


<form on:submit={handleSubmit} class="flex-grow flex flex-col gap-4">
    <div class="flex gap-4">
        <slot name="email" />
        <slot name="name" />
    </div>
    <slot name="message" />

    <button type="submit" class="py-3 px-6 bg-accent text-text font-bold font-mono rounded-xl hover:shadow-firm hover:transition-all hover:scale-105">Enviar</button>
</form>