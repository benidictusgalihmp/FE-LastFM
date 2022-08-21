function CurrencyFormatter(text) {
    return text.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export default CurrencyFormatter;
