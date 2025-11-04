export const CustomFullScreenLoading = () => {
    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-black/80 text-white">
            <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin" />
            <p className="mt-4 text-lg font-medium">Cargando...</p>
        </div>
    );
};
