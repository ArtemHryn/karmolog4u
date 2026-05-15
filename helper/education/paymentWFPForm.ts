interface iPaymentWFPForm {
  paymentUrl: string;
  formData: Record<string, string | []>;
}

const paymentWFPForm = (data: iPaymentWFPForm) => {
  const form = document.createElement('form');
  form.method = 'POST';
  form.action = data.paymentUrl;

  Object.entries(data.formData).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => {
        const input = document.createElement('input');

        input.type = 'hidden';
        input.name = `${key}[]`;
        input.value = String(item);

        form.appendChild(input);
      });

      return;
    }

    const input = document.createElement('input');

    input.type = 'hidden';
    input.name = key;
    input.value = String(value);

    form.appendChild(input);
  });

  document.body.appendChild(form);
  form.submit();
};

export default paymentWFPForm;
