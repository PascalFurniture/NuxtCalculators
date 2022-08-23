
// All functions exported from this master file


export const calculateVAT = (originalAmount, rate, addVAT) => {
    let output;
    return output = addVAT
        ? originalAmount * (1 + (rate / 100))
        : originalAmount - (originalAmount * rate) / (100 + rate);
}