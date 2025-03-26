import LineGradient from '../components/LineGradient'
import { motion } from 'framer-motion'
import ContactImg from '../assets/contact-image.jpeg';
import { useForm } from 'react-hook-form';



const Contact = () => {
    const { register, trigger, formState: { errors }, } = useForm();

    const handleSubmit = async(e) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    };

  return (
    <section className='py-48' id="contact">
        {/* HEADINGS */}
        <motion.div
            className="md:flex md:justify-end w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5}}
            transition={{ duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
            }}
        >
            <div>
                <p className='text-4xl text-semibold font-playfair mb-5'>
                    <span className='text-yellow'>CONTACT ME</span> TO GET STARTED
                </p>
                <div className="flex md:justify-end my-5">
                    <LineGradient width='w-1/2' />
                </div>    
            </div>           
        </motion.div>
    
        {/* FORM AND IMAGES */}
        <div className='md:flex md:justify-between gap-16 mt-5'>
            <motion.div
                className='basis-1/2 mt-10 md:mt-0 justify-center'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5}}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                }}
            >   
                <img src={ContactImg} alt='contact-image' />
            </motion.div>

            <motion.div
                className='basis-1/2 mt-10 md:mt-0'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5}}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                }}
            >
                <form
                    target='_blank'
                    onSubmit={handleSubmit}
                    action="https://formsubmit.co/0ef9c886fed8f2805e9014f4f372a465"
                    method="POST"
                >
                    <input
                        className='bg-blue w-full font-semibold placeholder-opaque-black p-3 mb-3'
                        type="text"
                        placeholder='NAME'
                        {...register("name", {
                            required: true,
                            maxLength: 100,
                        })}
                    />
                        {errors.name && (
                            <p className='text-red my-1'>
                                {errors.name.type === "required" && "This field is required"}
                                {errors.name.type === "maxLength" && "Max length is 100 characters"}
                            </p>
                        )}

                    <input
                        className='bg-blue w-full font-semibold placeholder-opaque-black p-3 mb-3'
                        type="text"
                        placeholder='EMAIL'
                        {...register("email", {
                            required: true,
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        })}
                    />
                        {errors.email && (
                            <p className='text-red my-1'>
                                {errors.email.type === "required" && "This field is required"}
                                {errors.email.type === "pattern" && "Invalid email address"}
                            </p>
                        )}

                    <textarea
                        className='bg-blue w-full font-semibold placeholder-opaque-black p-3 mb-3'
                        placeholder='MESSAGE'
                        rows="4"
                        cols="50"
                        {...register("about", {
                            required: true,
                            maxLength: 2000,
                        })}
                    />
                        {errors.about && (
                            <p className='text-red my-1'>
                                {errors.about.type === "required" && "This field is required"}
                                {errors.about.type === "maxLength" && "Max length is 2000 characters"}
                            </p>
                        )}

                    <button
                        type="submit"
                        className='mt-5 p-5 bg-yellow text-deep-blue font-semibold hover:bg-red hover:text-white transition duration-500'
                    >
                        SEND ME A MESSAGE
                    </button>
                </form>
            </motion.div>
        </div>
    </section>
  )
}

export default Contact