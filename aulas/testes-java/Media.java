import java.util.Scanner;

public class Media {

    public static void main(String[] args) {
        @SuppressWarnings("resource")
        Scanner scanner = new Scanner(System.in);

        // Declaração de variáveis
        String[] nomes = new String[5];
        double[][] notas = new double[5][2];

        // Coleta de dados
        for (int i = 0; i < nomes.length; i++) {
            System.out.print("Digite o nome do aluno " + (i + 1) + ": ");
            nomes[i] = scanner.nextLine();

            for (int j = 0; j < notas[i].length; j++) {
                System.out.print("Digite a nota do " + (j + 1) + "º bimestre de " + nomes[i] + ": ");
                notas[i][j] = scanner.nextDouble();
            }
        }

        // Cálculo da média
        double[] medias = new double[nomes.length];
        for (int i = 0; i < medias.length; i++) {
            medias[i] = (notas[i][0] + notas[i][1]) / 2;
        }

        // Apresentação dos resultados
        System.out.println();
        System.out.println("Nome | Nota 1º Bimestre | Nota 2º Bimestre | Média");
        System.out.println("---|---|---|---|");
        for (int i = 0; i < nomes.length; i++) {
            System.out.printf("%s | %.2f | %.2f | %.2f\n", nomes[i], notas[i][0], notas[i][1], medias[i]);
        }
    }
}
