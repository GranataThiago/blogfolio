import type { APIRoute } from "astro";
import { Resend } from "resend";


export const POST: APIRoute = async({ params, request }) => {
    
  try {
    console.log('Got here')

    const data = await request.formData();
    const name = data.get('name');
    const email = data.get('email');
    const message = data.get('message');

    if(!name || !email || !message){
        return new Response(
            JSON.stringify({
                errors: {
                    name: 'Campo inválido',
                    email: 'Campo inválido',
                    message: 'Campo inválido'
                }
            }),
            {
                status: 400
            }
        )
    }

    const resend = new Resend(import.meta.env.RESEND_API_KEY);

    const response = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'michaygr@gmail.com',
      subject: `Recibiste un mensaje de ${name}`,
      html: `${message!.toString()} <br/> sent by ${email}`
    });

    if(response.error){
        return new Response(
            JSON.stringify({message: 'Error Desconocido'}),
            { status: 500 }
        )
    }
    


    return new Response(
        JSON.stringify({ message: 'Tu mensaje se envió con éxito' }),
        { status: 200 }
    )

  } catch (error) {
    console.log(error)
    return new Response(
        JSON.stringify({message: 'Error Desconocido'}),
        { status: 500 }
    )
  }
}