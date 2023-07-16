import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";

export default function Contact() {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        name: "",
        phone: "",
        message: "",
    });

    const handleOnChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="flex justify-center align-middle">
            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg">
                <div className="text-center">
                    <p className="font-weight-bold text-3xl mt-1 block w-full text-gray-500 dark:text-gray-200">
                        Please Contact Us
                    </p>
                </div>

                <form onSubmit={submit}>
                    <div>
                        <InputLabel htmlFor="name" value="Name" />

                        <TextInput
                            id="name"
                            name="name"
                            value={data.name}
                            className="mt-1 block w-full"
                            autoComplete="name"
                            isFocused={true}
                            onChange={handleOnChange}
                            required
                        />

                        <InputError message={errors.name} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="email" value="Email" />

                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            onChange={handleOnChange}
                            required
                        />

                        <InputError message={errors.email} className="mt-2" />
                    </div>
                    <div className="mt-4">
                        <InputLabel htmlFor="phone" value="Phone" />

                        <TextInput
                            id="phone"
                            type="text"
                            name="phone"
                            value={data.phone}
                            className="mt-1 block w-full"
                            autoComplete="phone"
                            onChange={handleOnChange}
                            required
                        />

                        <InputError message={errors.phone} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="message" value="message" />

                        <textarea
                            className={
                                "border-gray-300 w-full dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-md "
                            }
                            id="message"
                            type="text"
                            name="message"
                            value={data.message}
                            autoComplete="new-message"
                            onChange={handleOnChange}
                            required
                            placeholder="write your message here"
                        />

                        <InputError message={errors.message} className="mt-2" />
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        <PrimaryButton disabled={processing}>
                            send
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </div>
    );
}
