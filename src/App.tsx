import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
  const { handleSubmit, register, setValue, getValues } = useForm();

  useEffect(() => {
    const formData = localStorage.getItem('form-data');

    if (formData) {
      const parsedFormData = JSON.parse(formData);

      for (const field in parsedFormData) {
        setValue(field, parsedFormData[field]);
      }
    }
  }, [setValue]);

  const handleChange = () => {
    localStorage.setItem('form-data', JSON.stringify(getValues()));
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit((data) => console.log(data))}
        onChange={handleChange}
      >
        <label htmlFor='name'>Name</label>
        <br />
        <input {...register('name')} id='name' />
        <br />
        <br />
        <label htmlFor='surname'>Surname</label>
        <br />
        <input {...register('surname')} id='surname' />
        <br />
        <br />
        <p>
          <b>Gender</b>
        </p>
        <input
          {...register('gender')}
          type='radio'
          id='male'
          value='male'
          defaultChecked
        />
        <label htmlFor='male'>Male</label>
        <br />
        <input
          {...register('gender')}
          type='radio'
          id='female'
          value='female'
        />
        <label htmlFor='female'>Female</label>
        <br />
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
