import MultiStepForm from '@/Components/MultiStepForm';
import { Head, Link } from '@inertiajs/react';

export default function Welcome() {
   
    return (
        <>
            <Head title="VOC Feedback Form" />
            <div>
            <MultiStepForm />
            </div>
        </>
    );
}
